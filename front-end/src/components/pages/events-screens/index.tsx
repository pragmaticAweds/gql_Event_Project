import { useMutation, gql } from "@apollo/client";
import { useContext, useRef, useState } from "react";
import authContext from "../../../context/auth-context";
import Backdrop from "../../atoms/backdrop/backdrop";
import Button from "../../atoms/button/button";
import Modal from "../../molecules/modal/modal";
import ScreenTemplate from "../../screen-template/screen-template";

import "./event-styles.scss";

const ADD_EVENT_QUERY = gql`
  mutation Mutation($eventInput: EventInput!) {
    addEvent(eventInput: $eventInput) {
      id
      date
      price
      title
      description
    }
  }
`;

const EventScreen = () => {
  const token = useContext(authContext).token;
  const [eventFunc] = useMutation(ADD_EVENT_QUERY, {
    onError: (err) => {
      console.log(err.message);
    },
    onCompleted: (data) => {
      console.log(data);
    },
  });

  const [creating, setCreating] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const confirmModalHandler = () => {
    setCreating(false);
    const title = titleRef.current?.value;
    let price: string | undefined | number = priceRef.current?.value;
    const date = dateRef.current?.value;
    const description = descriptionRef.current?.value;

    if (
      title?.trim().length === 0 ||
      price?.trim().length === 0 ||
      date?.trim().length === 0 ||
      description?.trim().length === 0
    ) {
      return;
    }
    if (typeof price === "string") {
      price = +price;
    }

    const event = { title, price, date, description };
    eventFunc({
      variables: { eventInput: { title, price, description } },
    });

    console.log({ event });
  };

  return (
    <ScreenTemplate backDrop>
      {creating && <Backdrop />}
      {token && (
        <div className="event-control">
          <p>Share your own Events!</p>
          <Button
            title="Create Event"
            bg="bg-[purple] text-[white]"
            onClick={() => setCreating(true)}
          />
        </div>
      )}
      {creating && (
        <Modal
          title="Add Event"
          canCancel
          canConfirm
          onConfirm={() => confirmModalHandler()}
          onCancel={() => setCreating(false)}
        >
          <form>
            <div className="form-control">
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" ref={titleRef} />
            </div>
            <div className="form-control">
              <label htmlFor="price">Price:</label>
              <input type="number" id="price" ref={priceRef} />
            </div>
            <div className="form-control">
              <label htmlFor="date">Date:</label>
              <input type="datetime-local" id="date" ref={dateRef} />
            </div>
            <div className="form-control">
              <label htmlFor="description">Description:</label>
              <textarea rows={4} id="description" ref={descriptionRef} />
            </div>
          </form>
        </Modal>
      )}
    </ScreenTemplate>
  );
};

export default EventScreen;
