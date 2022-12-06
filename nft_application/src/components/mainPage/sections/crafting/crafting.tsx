import { motion } from "framer-motion";

import top_border from "../../../../assets/main/top-border.webp";
import bot_border from "../../../../assets/main/bot-border.webp";

import emblem1 from "../../../../assets/main/emblem1.png";
import emblem2 from "../../../../assets/main/emblem2.png";
import emblem3 from "../../../../assets/main/emblem3.png";

// import emblem1 from "../../../../assets/main/emblem1.webp";
// import emblem2 from "../../../../assets/main/emblem2.webp";
// import emblem3 from "../../../../assets/main/emblem3.webp";

import "./crafting.sass";
import { Trans } from "@lingui/macro";

export function Crafting() {
  const cardsVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: -50,
    },
  };

  return (
    <section id="crafting" className="crafting">
      <div className="squared-container">
        <img src={top_border} alt="tech-border" className="top-border" />
        <div className="container">
          <h1>
            <Trans>Gameplay</Trans>
          </h1>
          <div className="cards">
            <motion.div
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              variants={cardsVariants}
              className="card"
            >
              <div className="icon-handler">
                <img src={emblem1} alt="collection logo" />
              </div>
              <div className="text first">
                <h2>
                  <Trans>Explore</Trans>
                </h2>
                <h3>
                  <Trans>
                    Great rewards come with great efforts. Send your Gotchi via
                    Portal to Fun Lands to visit Kindergarten, School or
                    Business Center depending on it's evolution stage to earn
                    $GOTCHI and progress with the evolution.
                  </Trans>
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              variants={cardsVariants}
              className="card"
            >
              <div className="icon-handler">
                <img src={emblem2} alt="trade logo" />
              </div>

              <div className="text second">
                <h2>
                  <Trans>Take care</Trans>
                </h2>
                <h3>
                  <Trans>
                    All Gotchies need to be well taken care of. This is done by
                    completing mini-tasks such as feeding, hygiene care and
                    sleep.
                  </Trans>
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.6,
              }}
              variants={cardsVariants}
              className="card"
            >
              <div className="icon-handler">
                <img src={emblem3} alt="craft logo" />
              </div>
              <div className="text thirst">
                <h2>
                  <Trans>Evolve</Trans>
                </h2>
                <h3>
                  <Trans>
                    Your Gotchi has 4 evolution stages: Baby, Child, Teen,
                    Adult. Each stage brings its own challenges and has
                    different care routine.
                  </Trans>
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
        <img src={bot_border} alt="bottom-tech-border" className="bot-border" />
      </div>
    </section>
  );
}
