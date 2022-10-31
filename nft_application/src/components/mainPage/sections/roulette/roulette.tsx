import { motion } from "framer-motion";
import roulette from "../../../../assets/main/roulette.webm";
import roulette_mov from "../../../../assets/main/roulette.mov";

import bright_casual_sky from "../../../../assets/main/right-down-bright.webp";

import "./roulette.sass";

export function Roulette() {
  const sky_variants = {
    visible: { opacity: 0.6, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
  };
  return (
    <section id="roulette" className="roulette">
      <motion.img
        initial={"hidden"}
        variants={sky_variants}
        transition={{
          duration: 1,
        }}
        viewport={{
          amount: 0.4,
        }}
        whileInView={"visible"}
        src={bright_casual_sky}
        alt="sky"
        className="parallax-sky"
      />

      <motion.img
        initial={"hidden"}
        variants={sky_variants}
        style={{
          scaleX: -1,
        }}
        viewport={{
          amount: 0.4,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={"visible"}
        src={bright_casual_sky}
        alt="sky"
        className="parallax-right-sky"
      />

      <div className="container">
        <div className="text-side">
          <h1>Gotchi Roulette</h1>
          <h3>
            Try your luck by betting $GOTCHI on the Gotchi Wheel.
            <br /> <br />
            Gotchi Wheel is an mathematically legit gambling game with high
            potential ROI and fair RTP of 89%
          </h3>
          <motion.button
            initial={{
              opacity: 0.6,
            }}
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 1,
              },
            }}
            whileTap={{
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
            }}
          >
            Learn More
          </motion.button>
        </div>
        <video playsInline autoPlay loop muted>
          <source src={roulette_mov} type='video/mp4; codecs="hvc1" ' />
          <source src={roulette} type="video/webm" />
        </video>
      </div>
    </section>
  );
}
