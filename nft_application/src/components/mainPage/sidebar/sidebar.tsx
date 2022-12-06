import React, { FC, useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.sass";
import { NavLink } from "react-router-dom";
import stage_logo from "../../../assets/main/stageLogo.webp";
import burger_logo from "../../../assets/main/burger_logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ErrorModal } from "../../errorModal/errorModal";
import { Trans } from "@lingui/macro";

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
      <ErrorModal isOpen={modalIsOpen} onClose={closeModal} body={<></>} />
      <div className="header-logo">
        <img src={stage_logo} alt="header logo" />
      </div>
      <AnchorLink
        onClick={() => {
          setIsOpen(false);
        }}
        className="menu-item"
        href="#hero"
      >
        <Trans>Home</Trans>
      </AnchorLink>

      <AnchorLink
        onClick={() => {
          setIsOpen(false);
        }}
        offset="200"
        href="#video"
      >
        <Trans>About</Trans>
      </AnchorLink>

      <AnchorLink
        onClick={() => {
          setIsOpen(false);
        }}
        offset="200"
        href="#gotchies"
      >
        <Trans>Gotchies</Trans>
      </AnchorLink>

      <AnchorLink
        onClick={() => {
          setIsOpen(false);
        }}
        offset="200"
        href="#features"
      >
        <Trans>Features</Trans>
      </AnchorLink>

      <AnchorLink
        onClick={() => {
          setIsOpen(false);
        }}
        offset="200"
        href="#adventures"
      >
        <Trans>Fun Lands</Trans>
      </AnchorLink>

      <AnchorLink
        onClick={() => {
          setIsOpen(false);
        }}
        offset="200"
        href="#team"
      >
        <Trans>Team</Trans>
      </AnchorLink>

      <AnchorLink
        onClick={() => {
          setIsOpen(false);
        }}
        offset="200"
        href="#roadmap"
      >
        <Trans>Roadmap</Trans>
      </AnchorLink>

      <AnchorLink
        onClick={() => {
          setIsOpen(false);
        }}
        offset="200"
        href="#partners"
      >
        <Trans>Partners</Trans>
      </AnchorLink>

      <button onClick={openModal} className="app-button">
        <Trans>D.APP</Trans>
      </button>
    </Menu>
  );
};
