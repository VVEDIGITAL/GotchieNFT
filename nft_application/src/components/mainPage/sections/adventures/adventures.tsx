import { motion } from "framer-motion";
import island1 from "../../../../assets/main/island1.webm";
import island2 from "../../../../assets/main/island2.webm";
import island3 from "../../../../assets/main/island3.webm";
import island4 from "../../../../assets/main/island4.webm";
import right_sky from "../../../../assets/main/right-sky.webp";
import left_sky from "../../../../assets/main/left-sky.webp";
import right_down_sky from "../../../../assets/main/right-down-sky.webp";
import left_deep_sky from "../../../../assets/main/left-deep-sky.webp";
import shark_bright_sky from "../../../../assets/main/left-bright-sky.webp";
import bright_casual_sky from "../../../../assets/main/right-down-bright.webp";
import island1_mov from "../../../../assets/main/island1-1.mov";
import island2_mov from "../../../../assets/main/island2.mov";
import island3_mov from "../../../../assets/main/island3.mov";
import island4_mov from "../../../../assets/main/island4.mov";

import "./adventures.sass";
import { NavLink } from "react-router-dom";
import { Trans } from "@lingui/macro";

export function Adventures() {
  const variants2 = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: -50,
    },
  };
  return (
    <section id="adventures" className="adventures">
      <h1>
        <Trans>Fun Lands NFT's</Trans>
      </h1>

      <div className="right-area-mobile">
        <h3>
          <Trans>
            Fun Lands are limited supply NFT collectibles which offer real
            utility and limitless passive income opportunities for owners. They
            are fully integrated into ecosystem as lands which Gotchies visit to
            earn <span>$GOTCHI</span> and various in-game resources.
          </Trans>
        </h3>
        <motion.button
          initial={{
            opacity: 0.6,
          }}
          whileHover={{
            scale: 1.1,
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
          <NavLink to={"/mint"}>
            <Trans>Mint Fun Lands</Trans>
          </NavLink>
        </motion.button>
      </div>

      <div
        className="container"
        style={{
          maxHeight: "calc(100vw * 0.7)",
        }}
      >
        <div className="right-area">
          <h3>
            <Trans>
              Fun Lands are limited supply NFT collectibles which offer real
              utility and limitless passive income opportunities for owners.
              They are fully integrated into ecosystem as lands which Gotchies
              visit to earn <span>$GOTCHI</span> and various in-game resources.
            </Trans>
          </h3>
          <motion.button
            initial={{
              opacity: 0.6,
            }}
            whileHover={{
              scale: 1.1,
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
            <NavLink to={"/mint"}>
              <Trans>Mint Fun Lands</Trans>
            </NavLink>
          </motion.button>
        </div>
        <div className="sky-images">
          <img src={right_sky} alt="sky" className="right-sky" />
          <img src={left_sky} alt="sky" className="left-sky" />

          <img src={right_sky} alt="sky" className="right-sky-inversed" />
          <img src={left_sky} alt="sky" className="left-sky-inversed" />

          <img src={right_down_sky} alt="sky" className="right-down-sky" />
          <img src={right_down_sky} alt="sky" className="top-sky" />
          <img src={right_down_sky} alt="sky" className="top-right-sky" />
          <img src={right_down_sky} alt="sky" className="top-left-sky" />
          <img src={left_deep_sky} alt="sky" className="left-deep-sky" />

          <img
            src={left_deep_sky}
            alt="sky"
            className="left-deep-sky-inversed"
          />

          <img src={shark_bright_sky} alt="sky" className="bottom-shark-sky" />
          <img
            src={shark_bright_sky}
            alt="sky"
            className="bottom-shark-sky-inversed"
          />

          <img src={bright_casual_sky} alt="sky" className="top-casual-sky" />
        </div>

        <div className="islands">
          <motion.video
            style={{}}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{
              once: true,
            }}
            variants={variants2}
            className="island1"
            loop
            autoPlay
            muted
            playsInline
          >
            <source src={island1_mov} type='video/mp4; codecs="hvc1" ' />
            <source src={island1} type="video/webm" />
          </motion.video>
          <motion.video
            style={{}}
            initial={"hidden"}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            whileInView={"visible"}
            viewport={{
              once: true,
            }}
            variants={variants2}
            className="island2"
            loop
            autoPlay
            muted
            playsInline
          >
            {" "}
            <source src={island2_mov} type='video/mp4; codecs="hvc1" ' />
            <source src={island2} type="video/webm" />
          </motion.video>
          <motion.video
            style={{
              x: "-50%",
            }}
            transition={{
              duration: 1,
            }}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{
              once: true,
            }}
            variants={variants2}
            className="island3"
            loop
            autoPlay
            muted
            playsInline
          >
            <source src={island3_mov} type='video/mp4; codecs="hvc1" ' />
            <source src={island3} type="video/webm" />
          </motion.video>
          <motion.video
            style={{}}
            initial={"hidden"}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            whileInView={"visible"}
            viewport={{
              once: true,
            }}
            variants={variants2}
            className="island4"
            loop
            autoPlay
            muted
            playsInline
          >
            {" "}
            <source src={island4_mov} type='video/mp4; codecs="hvc1" ' />
            <source src={island4} type="video/webm" />
          </motion.video>
        </div>
      </div>
    </section>
  );
}
