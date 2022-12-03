import React, { FC, useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.sass";
import { NavLink } from "react-router-dom";
import stage_logo from "../../../assets/main/stageLogo.webp";
import burger_logo from "../../../assets/main/burger_logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ErrorModal } from "../../errorModal/errorModal";

interface SidebarProps {
  pageWrapId: string | undefined;
  outerContainerId: string;
}

export const Sidebar: FC<SidebarProps> = (pageWrapId, outerContainerId) => {
  const [isOpen, setIsOpen] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    if (modalIsOpen === true) {
      setTimeout(() => {
        setModalIsOpen(false);
      }, 2500);
    }
  }, [modalIsOpen]);

  return (
    <Menu
      right
      onOpen={() => {
        setIsOpen(true);
      }}
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      // burgerButtonClassName={"burger-button"}
      customBurgerIcon={<img src={burger_logo} />}
      // customBurgerIcon={false}
      // onOpen={userStore.openSideBar}
      // isOpen={userStore.sidebarIsOpen}
      // onClose={userStore.closeSideBar}
      //   pageWrapId={String(pageWrapId)}
      //   outerContainerId={String(outerContainerId)}
    >
      <ErrorModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        body={<p>Oups, Coming Soon!</p>}
      />

      <div className="header-logo">
        <img src={stage_logo} alt="header logo" />
      </div>

      <NavLink
        onClick={() => {
          setIsOpen(false);
        }}
        className="menu-item"
        to="/"
      >
        Home
      </NavLink>

      <button
        onClick={() => {
          openModal();
          setIsOpen(false);
        }}
        className="app-button"
      >
        D.APP
      </button>
    </Menu>
  );
};
