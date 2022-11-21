import "./header.sass";
import stage_logo from "../../assets/main/stageLogo.webp";
import { Sidebar } from "../mainPage/sidebar/sidebar";
import AnchorLink from "react-anchor-link-smooth-scroll";

const calcOffset = (perc: number) => {
  return (window.outerHeight * perc) / 100;
};

export function Header() {
  return (
    <>
      <Sidebar pageWrapId={"full_header_container"} outerContainerId={"root"} />
      <header>
        <div className="main_container">
          <div className="header_logo">
            <img src={stage_logo} alt="header logo" />
          </div>
          <ul className="menu">
            <AnchorLink offset={calcOffset(8)} href="#video">
              <li>About</li>
            </AnchorLink>
            <AnchorLink offset="50" href="#gotchies">
              <li>Gotchies</li>
            </AnchorLink>
            <AnchorLink offset="60" href="#features">
              <li>Features</li>
            </AnchorLink>
            <AnchorLink offset="80" href="#adventures">
              <li className="lands-link">Fun Lands</li>
            </AnchorLink>
            <AnchorLink offset="50" href="#team">
              <li>Team</li>
            </AnchorLink>
            <AnchorLink offset="0" href="#roadmap">
              <li>Roadmap</li>
            </AnchorLink>{" "}
            <AnchorLink offset="200" href="#partners">
              <li>Partners</li>
            </AnchorLink>{" "}
          </ul>
          <button>D.APP</button>
        </div>
      </header>
    </>
  );
}
