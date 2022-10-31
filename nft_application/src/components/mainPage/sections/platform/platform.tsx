import { motion } from "framer-motion";
import islandf from "../../../../assets/main/island_features.webp";
import profile_icon from "../../../../assets/main/profile-logo.webp";
import shield_icon from "../../../../assets/main/shield-logo.webp";
import chat_icon from "../../../../assets/main/chat-logo.webp";
import like_icon from "../../../../assets/main/like-logo.webp";
import check_icon from "../../../../assets/main/check-logo.webp";
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
              Crypto Gotchies <br /> not your typical P2E game
            </h2>
            <h3>
              We plan to create GotchiVerse and integrate social-fi creating
              whole different AAA game experience. With future lobby update you
              will be able to team up with your friends and explore Fun Lands
              and even battle with other teams to split weekly prizes along with
              top 10 teams from leaderboard.
            </h3>
          </div>

          <div className="dark-tips-area">
            <div className="island">
              <img src={islandf} alt="island" />
            </div>

            <div className="first-tips-row">
              <div className="tip">
                <span>GotchiVerse</span>
                <img src={profile_icon} alt="profile img-logo" />
              </div>
              <div className="tip">
                <span className="onerow-span">Multiplayer </span>

                <img src={shield_icon} alt="shield img-logo" />
              </div>
              <div className="tip">
                <span>Teams</span>
                <img src={chat_icon} alt="message img-logo" />
              </div>
            </div>
            <div className="second-tips-row">
              <div className="tip">
                <img src={like_icon} alt="like img-logo" />
                <span className="onerow-span">Leaderboard</span>
              </div>
              <div className="tip">
                <img src={check_icon} alt="task img-logo" />
                <span>Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
