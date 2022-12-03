import { motion } from "framer-motion";
import stage_logo from "../../../../assets/main/stageLogo.webp";
import token_logo from "../../../../assets/main/token-logo.webp";
import stage_logoG from "../../../../assets/main/stageLogoG.png";

import "./roadmap.sass";

export function Roadmap() {
  const openVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: {
      opacity: 0,
      x: "-5%",
    },
  };

  return (
    <section id="roadmap" className="roadmap">
      <h1>Roadmap</h1>

      <div className="container">
        <details>
          <summary>
            <div className="summary">
              {" "}
              <img src={stage_logo} alt="logo" />
              <div>
                <h3>Stage 0</h3>
                <span>(November 2022)</span>
              </div>
            </div>
          </summary>
          <motion.ul
            initial={"hidden"}
            whileInView={"visible"}
            transition={{
              duration: 0.6,
            }}
            variants={openVariants}
          >
            <li>Game Concept </li>
            <li>Whitepaper</li>
            <li>Website launch</li>
            <li>In-game wallet system </li>
            <li>$GOTCHI token deploy</li>
            <li>Gotchies and Fun Lands NFTs contracts design</li>
          </motion.ul>
        </details>

        <details open={true}>
          <summary>
            <div className="summary">
              {" "}
              <motion.img
                animate={{ rotate: 360 }}
                transition={{
                  ease: "linear",
                  duration: 3,

                  repeat: Infinity,
                  type: "tween",
                }}
                src={token_logo}
                alt="logo"
                className="active"
              />
              <div>
                <h3>Stage 1</h3>
                <span>(December 2022)</span>
              </div>
            </div>
          </summary>
          <motion.ul
            initial={"hidden"}
            whileInView={"visible"}
            transition={{
              duration: 0.6,
            }}
            variants={openVariants}
          >
            <li>Pinksale presale </li>
            <li>Fun Lands sale</li>
            <li>Pancakeswap Launch </li>
            <li>Game beta test </li>
            <li>Game Alpha release</li>
          </motion.ul>
        </details>

        <details>
          <summary>
            <div className="summary">
              {" "}
              <img src={stage_logoG} alt="logo" />
              <div>
                <h3>Stage 2</h3>
                <span>(January 2023)</span>
              </div>
            </div>
          </summary>
          <motion.ul
            initial={"hidden"}
            whileInView={"visible"}
            transition={{
              duration: 0.6,
            }}
            variants={openVariants}
          >
            <li>Tier 1 CEX Listings</li>
            <li>Game v1.0 release</li>
            <li>Gotchi x Partners limited NFTs </li>
            <li>Gotchi guilds </li>
          </motion.ul>
        </details>
        <details>
          <summary>
            <div className="summary">
              {" "}
              <img src={stage_logoG} alt="logo" />
              <div>
                <h3>Stage 3</h3>
                <span>(February 2023)</span>
              </div>
            </div>
          </summary>
          <motion.ul
            initial={"hidden"}
            whileInView={"visible"}
            transition={{
              duration: 0.6,
            }}
            variants={openVariants}
          >
            <li>Exponential user growth </li>
            <li>Fun Lands side missions </li>
            <li>PvP mode launch</li>
            <li>Limited Winter Season Gotchies NFTs </li>
            <li>Christmas events</li>
          </motion.ul>
        </details>

        <details>
          <summary>
            <div className="summary">
              {" "}
              <img src={stage_logoG} alt="logo" />
              <div>
                <h3>Stage 4</h3>
                <span>(March 2023)</span>
              </div>
            </div>
          </summary>
          <motion.ul
            initial={"hidden"}
            whileInView={"visible"}
            transition={{
              duration: 0.6,
            }}
            variants={openVariants}
          >
            <li>Gotchies Breeding </li>
            <li>New evolution stage </li>
            <li>$GOTCHI staking</li>
            <li>$GOTCHI on other chains</li>
          </motion.ul>
        </details>
      </div>
    </section>
  );
}
