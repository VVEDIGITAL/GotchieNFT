import "./header.sass";
import stage_logo from "../../assets/main/stageLogo.webp";
import { Sidebar } from "../mainPage/sidebar/sidebar";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
            <AnchorLink offset="200" href="#video">
              <li>About</li>
            </AnchorLink>
            <AnchorLink offset="200" href="#gotchies">
              <li>Gotchies</li>
            </AnchorLink>
            <AnchorLink offset="200" href="#features">
              <li>Features</li>
            </AnchorLink>
            <AnchorLink offset="200" href="#adventures">
              <li>Fun Lands</li>
            </AnchorLink>
            <AnchorLink offset="200" href="#team">
              <li>Team</li>
            </AnchorLink>
            <AnchorLink offset="200" href="#roadmap">
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
