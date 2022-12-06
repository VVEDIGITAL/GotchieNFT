import { motion } from "framer-motion";
import stage_logo from "../../../../assets/main/stageLogo.webp";
import token_logo from "../../../../assets/main/token-logo.webp";
import stage_logoG from "../../../../assets/main/stageLogoG.png";

import "./roadmap.sass";
import { Trans } from "@lingui/macro";

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
      <h1>
        <Trans>Roadmap</Trans>
      </h1>

      <div className="container">
        <details>
          <summary>
            <div className="summary">
              {" "}
              <img src={stage_logo} alt="logo" />
              <div>
                <h3>
                  <Trans>Stage 0</Trans>
                </h3>
                <span>
                  <Trans>(November 2022)</Trans>
                </span>
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
            <li>
              <Trans>Game Concept</Trans>{" "}
            </li>
            <li>
              <Trans>Whitepaper</Trans>
            </li>
            <li>
              <Trans>Website launch</Trans>
            </li>
            <li>
              <Trans>In-game wallet system</Trans>{" "}
            </li>
            <li>
              <Trans>$GOTCHI token deploy</Trans>
            </li>
            <li>
              <Trans>Gotchies and Fun Lands NFTs contracts design</Trans>
            </li>
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
                <h3>
                  <Trans>Stage 1</Trans>
                </h3>
                <span>
                  <Trans>(December 2022)</Trans>
                </span>
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
            <li>
              <Trans>Pinksale presale</Trans>{" "}
            </li>
            <li>
              <Trans>Fun Lands sale</Trans>
            </li>
            <li>
              <Trans>Pancakeswap Launch</Trans>{" "}
            </li>
            <li>
              <Trans>Game beta test</Trans>{" "}
            </li>
            <li>
              <Trans>Game Alpha release</Trans>
            </li>
          </motion.ul>
        </details>

        <details>
          <summary>
            <div className="summary">
              {" "}
              <img src={stage_logoG} alt="logo" />
              <div>
                <h3>
                  <Trans>Stage 2</Trans>
                </h3>
                <span>
                  <Trans>(January 2023)</Trans>
                </span>
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
            <li>
              <Trans>Tier 1 CEX Listings</Trans>
            </li>
            <li>
              <Trans>Game v1.0 release</Trans>
            </li>
            <li>
              <Trans>Gotchi x Partners limited NFTs</Trans>{" "}
            </li>
            <li>
              <Trans>Gotchi guilds</Trans>{" "}
            </li>
          </motion.ul>
        </details>
        <details>
          <summary>
            <div className="summary">
              {" "}
              <img src={stage_logoG} alt="logo" />
              <div>
                <h3>
                  <Trans>Stage 3</Trans>
                </h3>
                <span>
                  <Trans>(February 2023)</Trans>
                </span>
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
            <li>
              <Trans>Exponential user growth</Trans>{" "}
            </li>
            <li>
              <Trans>Fun Lands side missions</Trans>{" "}
            </li>
            <li>
              <Trans>PvP mode launch</Trans>
            </li>
            <li>
              <Trans>Limited Winter Season Gotchies NFTs</Trans>{" "}
            </li>
            <li>
              <Trans>Christmas events</Trans>
            </li>
          </motion.ul>
        </details>

        <details>
          <summary>
            <div className="summary">
              {" "}
              <img src={stage_logoG} alt="logo" />
              <div>
                <h3>
                  <Trans>Stage 4</Trans>
                </h3>
                <span>
                  <Trans>(March 2023)</Trans>
                </span>
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
            <li>
              <Trans>Gotchies Breeding</Trans>{" "}
            </li>
            <li>
              <Trans>New evolution stage</Trans>{" "}
            </li>
            <li>
              <Trans>$GOTCHI staking</Trans>
            </li>
            <li>
              <Trans>$GOTCHI on other chains</Trans>
            </li>
          </motion.ul>
        </details>
      </div>
    </section>
  );
}
