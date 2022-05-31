import React, { ReactNode } from "react";
import Button from "../../atoms/button/button";
import "./index.scss";

interface IModal {
  title?: string;
  canCancel?: boolean;
  canConfirm?: boolean;
  children?: ReactNode | string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Modal = ({
  title,
  canCancel,
  canConfirm,
  children,
  onConfirm,
  onCancel,
}: IModal) => {
  return (
    <div className="modal">
      <header className="modal-header">
        <h1>{title}</h1>
      </header>
      <section className="content">{children}</section>
      <section className="actions">
        {canCancel && (
          <Button
            title="Cancel"
            bg="bg-[purple] text-white"
            onClick={onCancel}
          />
        )}
        {canConfirm && (
          <Button
            title="Confirm"
            bg="bg-[purple] text-white"
            onClick={onConfirm}
          />
        )}
      </section>
    </div>
  );
};

export default Modal;
