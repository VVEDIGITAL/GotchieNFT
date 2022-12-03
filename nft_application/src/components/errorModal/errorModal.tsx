import { FunctionComponent, useEffect } from "react";
import Modal from "../modal/modal";
import "./errorModal.sass";

import coming from "../../assets/modal/coming-soon.png";

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
        body={
          <div>
            <img src={coming} alt="coming img popup" />
          </div>
        }
      />
    </>
  );
};
