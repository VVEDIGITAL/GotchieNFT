import twitter from "../../../../assets/main/twitter.webp";
import discord from "../../../../assets/main/discord.webp";
import telegram from "../../../../assets/main/tg.webp";
import youtube from "../../../../assets/main/youtube.png";

import "./footer.sass";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="sections">
          <div className="social">
            <h3>Join Us</h3>
            <div className="first">
              <a href="https://t.me/cryptogotchies_chat" className="telegram">
                <img src={telegram} alt="tg" />
              </a>

              <a href="https://twitter.com/CryptoGotchies" className="twitter">
                <img src={twitter} alt="twitter" />
              </a>

              {/* <a className="discord-mobile">
                <img src={discord} alt="discord" />
              </a> */}

              <a
                className="youtube"
                href="https://www.youtube.com/@cryptogotchies"
              >
                <img src={youtube} alt="discord" />
              </a>

              {/* <a>
                <img src={discord} alt="discord" className="discord" />
              </a> */}
            </div>

            {/* <a>
              <img src={discord} alt="discord" className="discord" />
            </a> */}
          </div>
          <div className="invest">
            <h3>Invest</h3>
            <div className="links">
              <a>
                <h4>$GOTCHI Presale </h4>
              </a>
              <NavLink to={"/mint"}>
                <h4>Mint Lands </h4>
              </NavLink>

              <a>
                <h4>NFT Market</h4>
              </a>
            </div>
          </div>

          <div className="game">
            <h3>Game</h3>
            <div className="links">
              <a>
                <h4>Game World</h4>
              </a>
              <a>
                <h4>Leaderboard</h4>
              </a>
              <a>
                <h4>Achievements</h4>
              </a>
            </div>
          </div>

          <div className="docs">
            <h3>Documents </h3>
            <div className="links">
              <a href="https://cryptogotchies.gitbook.io/whitepaper/">
                <h4>Whitepaper</h4>
              </a>
              <a>
                <h4>Audit</h4>
              </a>
              <a>
                <h4>KYC</h4>
              </a>
            </div>
          </div>
        </div>
        {/* <h3 className="copyrights">
          © 2022- Crypto Gotchies. All rights reserved.
        </h3> */}
      </div>
    </footer>
  );
}
