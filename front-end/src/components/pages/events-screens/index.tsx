import { useState } from "react";
import Backdrop from "../../atoms/backdrop/backdrop";
import Button from "../../atoms/button/button";
import Modal from "../../molecules/modal/modal";
import ScreenTemplate from "../../screen-template/screen-template";

import "./event-styles.scss";

const EventScreen = () => {
  const [creating, setCreating] = useState(false);
  return (
    <ScreenTemplate backDrop>
      {creating && <Backdrop />}
      <div className="event-control">
        <p>Share your own Events!</p>
        <Button
          title="Create Event"
          bg="bg-[purple] text-[white]"
          onClick={() => setCreating(true)}
        />
      </div>
      {creating && (
        <Modal
          title="Add Event"
          canCancel
          canConfirm
          onConfirm={() => setCreating(false)}
          onCancel={() => setCreating(false)}
        >
          <form>
            <div className="form-control">
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" />
            </div>
            <div className="form-control">
              <label htmlFor="price">Price:</label>
              <input type="text" id="price" />
            </div>
            <div className="form-control">
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" />
            </div>
            <div className="form-control">
              <label htmlFor="description">Description:</label>
              <textarea rows={4} id="description" />
            </div>
          </form>
        </Modal>
      )}
    </ScreenTemplate>
  );
};

export default EventScreen;
