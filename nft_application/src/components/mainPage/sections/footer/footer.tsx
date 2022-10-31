import twitter from "../../../../assets/main/twitter.webp";
import discord from "../../../../assets/main/discord.webp";
import telegram from "../../../../assets/main/tg.webp";

import "./footer.sass";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="sections">
          <div className="social">
            <h3>Join Us</h3>
            <div className="first">
              <a className="telegram">
                <img src={telegram} alt="tg" />
              </a>
              <a>
                <img src={twitter} alt="twitter" />
              </a>
              <a className="discord-mobile">
                <img src={discord} alt="discord" />
              </a>
            </div>

            <a>
              <img src={discord} alt="discord" className="discord" />
            </a>
          </div>
          <div className="invest">
            <h3>Invest</h3>
            <div className="links">
              <a>
                <h4>Buy Token</h4>
              </a>
              <a>
                <h4>NFT Market</h4>
              </a>
              <a>
                <h4>In-Game Market</h4>
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
            <h3>Docs</h3>
            <div className="links">
              <a>
                <h4>Whitepaper</h4>
              </a>
              <a>
                <h4>Audit</h4>
              </a>
              <a>
                <h4>Pitch Deck</h4>
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
