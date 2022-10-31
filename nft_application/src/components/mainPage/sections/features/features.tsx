import { motion } from "framer-motion";
import header_smoke from "../../../../assets/main/header-right-smoke.webp";
import logo1 from "../../../../assets/main/logo1.webp";
import logo2 from "../../../../assets/main/logo2.webp";
import logo3 from "../../../../assets/main/logo3.webp";
import logo4 from "../../../../assets/main/logo4.webp";
import logo5 from "../../../../assets/main/logo5.webp";
import logo6 from "../../../../assets/main/logo6.webp";

import "./features.sass";

export function Features() {
  const leftCardsVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: {
      opacity: 0,
      x: -50,
    },
  };

  const rightCardsVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: {
      opacity: 0,
      x: 50,
    },
  };

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Core Features</h2>
        <img src={header_smoke} alt="sky" className="smoke" />
        <div className="cards">
          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            transition={{
              duration: 1,
            }}
            viewport={{
              amount: 0.7,
            }}
            variants={leftCardsVariants}
            className="card card1"
          >
            <div className="title">
              <div className="logo_img">
                <img src={logo1} alt="hand" />
              </div>
              <h3>True Ownership</h3>
            </div>
            <h4>
              Gotchies and Fun Lands are NFTs meaning you have 100% ownership
              over the assets. You can buy, sell and transfer it to anyone
              without any restriction.
            </h4>
            <h4 className="mobile">
              Gotchies and Fun Lands are NFTs meaning you have 100% ownership
              over the assets. You can buy, sell and transfer it to anyone
              without any restriction.
            </h4>
          </motion.div>

          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{
              amount: 0.7,
            }}
            transition={{
              duration: 1,
            }}
            variants={rightCardsVariants}
            className="card card2"
          >
            <div className="title">
              <div className="logo_img">
                <img src={logo2} alt="Marketplace" />
              </div>
              <h3>Secondary Market </h3>
            </div>

            <h4>
              You can trade your NFT on any secondary third party NFT
              Marketplaces. Crypto Gotchies will be verified NFT collection on
              multiple NFT Marketplaces including our own one.
            </h4>
            <h4 className="mobile">
              You can trade your NFT on any secondary third party NFT
              Marketplaces. Crypto Gotchies will be verified NFT collection on
              multiple NFT Marketplaces including our own one.
            </h4>
          </motion.div>

          {/* <div className="card">
            <div className="logo_img">
              <img src={logo3} alt="Leaderboard" />
            </div>
            <h3>Leaderboard</h3>
            <h4>
              Grow your beasties and move up in the player rankings. Prizes
              await the winners
            </h4>
          </div> */}

          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{
              amount: 0.7,
            }}
            transition={{
              duration: 1,
            }}
            variants={leftCardsVariants}
            className="card card3"
          >
            <div className="title">
              <div className="logo_img">
                <img src={logo4} alt="wallet" />
              </div>
              <h3>In-Game Wallet</h3>
            </div>
            <h4>
              Crypto Gotchies utilizes in-game wallet which stores your $GOTCHI
              safely and lets deposit or withdraw tokens at any time.
            </h4>
            <h4 className="mobile">
              Crypto Gotchies utilizes in-game wallet which stores your $GOTCHI
              safely and lets deposit or withdraw tokens at any time.
            </h4>
          </motion.div>

          <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{
              amount: 0.7,
            }}
            transition={{
              duration: 1,
            }}
            variants={rightCardsVariants}
            className="card card4"
          >
            <div className="title">
              <div className="logo_img">
                <img src={logo5} alt="design" />
              </div>
              <h3>Security first </h3>
            </div>
            <h4>
              We implemented well secured game internals with a help of leading
              experts. Crypto Gotchies is audited and our team is KYC'd.
            </h4>
            <h4 className="mobile">
              We implemented well secured game internals with a help of leading
              experts. Crypto Gotchies is audited and our team is KYC'd.
            </h4>
          </motion.div>

          {/* <div className="card">
            <div className="logo_img">
              <img src={logo6} alt="profile" />
            </div>
            <h3>Community Driven Development</h3>
            <h4>
              We will conduct a transparent development, which you can observe,
              as well as can take part in it and leave your proposal
            </h4>
          </div> */}
        </div>
      </div>
    </section>
  );
}
