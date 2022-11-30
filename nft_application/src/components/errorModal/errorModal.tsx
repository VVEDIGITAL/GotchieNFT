import { FunctionComponent } from "react";
import Modal from "../modal/modal";
import "./errorModal.sass";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  body: JSX.Element;
}

export const ErrorModal: FunctionComponent<ModalProps> = ({
  isOpen,
  onClose,
  body,
}) => {
  return (
    <>
      <Modal
        overlay_style="errorOverlay"
        window_style="modalWindow modalWindowError"
        isOpen={isOpen}
        onClose={onClose}
        body={body}
      />
    </>
  );
};
