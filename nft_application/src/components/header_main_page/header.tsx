import "./header.sass";
import stage_logo from "../../assets/main/stageLogo.webp";
import { Sidebar } from "../mainPage/sidebar/sidebar";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect, useState } from "react";
import { ErrorModal } from "../errorModal/errorModal";
import { NavLink } from "react-router-dom";
import { Trans } from "@lingui/macro";
import LanguageSelector from "../languageSelector/LanguageSelector";
import { i18n } from "@lingui/core";

const calcOffset = (perc: number) => {
  return (window.outerHeight * perc) / 100;
};

export function Header() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (modalIsOpen === true) {
      setTimeout(() => {
        setIsOpen(false);
      }, 3500);
    }
  }, [modalIsOpen]);

  return (
    <>
      <Sidebar pageWrapId={"full_header_container"} outerContainerId={"root"} />
      <ErrorModal isOpen={modalIsOpen} onClose={closeModal} body={<></>} />
      <header>
        <div className="main_container">
          <div className="header_logo">
            <img src={stage_logo} alt="header logo" />
          </div>
          <ul className="menu">
            <AnchorLink offset={calcOffset(8)} href="#video">
              <li>
                <Trans>About</Trans>
              </li>
            </AnchorLink>
            <AnchorLink offset="50" href="#gotchies">
              <li>
                <Trans>Gotchies</Trans>
              </li>
            </AnchorLink>
            <AnchorLink offset="60" href="#features">
              <li>
                <Trans>Features</Trans>
              </li>
            </AnchorLink>
            {/* <AnchorLink offset="80" href="#adventures">
              <li className="lands-link">Mint Fun Lands</li>
            </AnchorLink> */}
            <NavLink
              onClick={() => {
                setIsOpen(false);
              }}
              className="menu-item"
              to="/mint"
            >
              <li className="lands-link">
                <Trans>Mint Fun Lands</Trans>
              </li>
            </NavLink>
            <AnchorLink offset="50" href="#team">
              <li>
                <Trans>Team</Trans>
              </li>
            </AnchorLink>
            <AnchorLink offset="0" href="#roadmap">
              <li>
                <Trans>Roadmap</Trans>
              </li>
            </AnchorLink>{" "}
            <AnchorLink offset="200" href="#partners">
              <li>
                <Trans>Partners</Trans>
              </li>
            </AnchorLink>{" "}
          </ul>

          <button onClick={openModal}>
            <Trans>D.APP</Trans>
          </button>
        </div>
      </header>
    </>
  );
}
