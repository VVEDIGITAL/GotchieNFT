import { motion } from "framer-motion";
import special_bg from "../../../../assets/main/special-bg.webp";

import partner_gotchie from "../../../../assets/main/partner-gotchie.mp4";
import partner_gotchie_mov from "../../../../assets/main/partner-gotchie.mov";

import "./special.sass";
import { Trans } from "@lingui/macro";

export function Special() {
  const variants2 = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 0,
    },
  };

  return (
    <section id="special" className="special">
      <div className="container">
        <img src={special_bg} alt="bg" className="bg" />
        <h1>
          <Trans>Want To Become Our Partner</Trans>
        </h1>

        <h3>
          <Trans>
            Each day we pursue getting new partners onboard by offering branded
            limited NFT Gotchies and Additional Items collectibles.
          </Trans>
        </h3>

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
            variants={variants2}
            className="gotchie_special"
          >
            {/* <video src={g_boy2} loop autoPlay /> */}
            <video src={partner_gotchie} playsInline autoPlay loop muted>
              {" "}
              <source src={partner_gotchie} type="video/webm" />
              <source src={partner_gotchie_mov} type="video/mp4;" />
            </video>
            <div className="description">
              <h3>
                <Trans>Branded Gotchi special</Trans>
                <br />
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
