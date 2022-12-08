import twitter from "../../../../assets/main/twitter.webp";
import discord from "../../../../assets/main/discord.webp";
import telegram from "../../../../assets/main/tg.webp";
import youtube from "../../../../assets/main/youtube.png";

import "./footer.sass";
import { NavLink } from "react-router-dom";
import { Trans } from "@lingui/macro";
import { i18n } from "@lingui/core";
import LanguageSelector from "../../../languageSelector/LanguageSelector";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <div className="sections">
            <div className="social">
              <h3>
                <Trans>Join Us</Trans>
              </h3>
              <div className="first">
                <a href="https://t.me/cryptogotchies_chat" className="telegram">
                  <img src={telegram} alt="tg" />
                </a>

                <a
                  href="https://twitter.com/CryptoGotchies"
                  className="twitter"
                >
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
              <h3>
                <Trans>Invest</Trans>
              </h3>
              <div className="links">
                <a href="https://www.pinksale.finance/launchpad/0x573Bf12635A3cD5312Ac1FA4FeaFBa80ce1A84bC?chain=BSC">
                  <h4>
                    <Trans>$GOTCHI Presale</Trans>{" "}
                  </h4>
                </a>
                <NavLink to={"/mint"}>
                  <h4>
                    <Trans>Mint Lands</Trans>{" "}
                  </h4>
                </NavLink>

                <a className="grey">
                  <h4>
                    <Trans>NFT Market</Trans>
                  </h4>
                </a>
              </div>
            </div>

            <div className="game">
              <h3>
                <Trans>Game</Trans>
              </h3>
              <div className="links">
                <a className="grey">
                  <h4>
                    <Trans>Game World</Trans>
                  </h4>
                </a>
                <a className="grey">
                  <h4>
                    <Trans>Leaderboard</Trans>
                  </h4>
                </a>
                <a className="grey">
                  <h4>
                    <Trans>Achievements</Trans>
                  </h4>
                </a>
              </div>
            </div>

            <div className="docs">
              <h3>
                <Trans>Documents</Trans>{" "}
              </h3>
              <div className="links">
                <a href="https://cryptogotchies.gitbook.io/whitepaper/">
                  <h4>
                    <Trans>Whitepaper</Trans>
                  </h4>
                </a>
                <a href="https://github.com/cyberscope-io/audits/blob/main/gotchi/audit.pdf">
                  <h4>
                    <Trans>Audit</Trans>
                  </h4>
                </a>
                <a href="https://github.com/solidproof/projects/blob/main/CRYPTO%20GOTCHIES/KYC_Certificate_CRYPTO_GOTCHIES.png">
                  <h4>
                    <Trans>KYC</Trans>
                  </h4>
                </a>
              </div>
            </div>
          </div>
          <LanguageSelector language={i18n._locale} />
        </div>
        {/* <h3 className="copyrights">
          © 2022- Crypto Gotchies. All rights reserved.
        </h3> */}
      </div>
    </footer>
  );
}
