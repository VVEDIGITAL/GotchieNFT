import { FunctionComponent, useEffect } from "react";
import Modal from "../modal/modal";
import "./errorModal.sass";

import coming from "../../assets/modal/coming-soon.png";
import { i18n } from "@lingui/core";
import coming_zh from "../../assets/modal/coming-modal-zh.webp";

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
            <img
              src={i18n._locale == "zh" ? coming_zh : coming}
              alt="coming img popup"
            />
          </div>
        }
      />
    </>
  );
};
