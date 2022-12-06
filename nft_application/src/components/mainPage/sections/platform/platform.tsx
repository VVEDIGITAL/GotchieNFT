import { Trans } from "@lingui/macro";
import { motion } from "framer-motion";
import islandf from "../../../../assets/main/island_features.webp";
import profile_icon from "../../../../assets/main/logo1.png";
import shield_icon from "../../../../assets/main/logo2.png";
import chat_icon from "../../../../assets/main/logo3.png";
import like_icon from "../../../../assets/main/logo4.png";
import check_icon from "../../../../assets/main/logo5.png";
import bright_casual_sky from "../../../../assets/main/right-down-bright.webp";

import "./platform.sass";

export function Platform() {
  const sky_variants_opacity = {
    visible: { opacity: 0.3, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
  };

  return (
    <section id="platform" className="platform">
      <div className="container">
        <motion.img
          initial={"hidden"}
          variants={sky_variants_opacity}
          style={{
            scaleX: -1,
          }}
          viewport={{
            amount: 0.2,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={"visible"}
          src={bright_casual_sky}
          alt="sky"
          className="parallax-right-sky"
        />

        <div className="content-area">
          <div className="text-block">
            <h2>
              <Trans>
                Crypto Gotchies <br /> not your typical P2E game
              </Trans>
            </h2>
            <h3>
              <Trans>
                We plan to create GotchiVerse and integrate social-fi creating
                whole different AAA game experience. With future lobby update
                you will be able to team up with your friends and explore Fun
                Lands and even battle with other teams to split weekly prizes
                along with top 10 teams from leaderboard.
              </Trans>
            </h3>
          </div>

          <div className="dark-tips-area">
            <div className="island">
              <img src={islandf} alt="island" />
            </div>

            <div className="first-tips-row">
              <div className="tip">
                <span>
                  <Trans>GotchiVerse</Trans>
                </span>
                <img src={profile_icon} alt="profile img-logo" />
              </div>
              <div className="tip">
                <span className="onerow-span">
                  <Trans>Multiplayer</Trans>{" "}
                </span>

                <img src={shield_icon} alt="shield img-logo" />
              </div>
              <div className="tip">
                <span>
                  <Trans>Teams</Trans>
                </span>
                <img src={chat_icon} alt="message img-logo" />
              </div>
            </div>
            <div className="second-tips-row">
              <div className="tip">
                <img src={like_icon} alt="like img-logo" />
                <span className="onerow-span">
                  <Trans>Leaderboard</Trans>
                </span>
              </div>
              <div className="tip">
                <img src={check_icon} alt="task img-logo" />
                <span>
                  <Trans>Updates</Trans>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
