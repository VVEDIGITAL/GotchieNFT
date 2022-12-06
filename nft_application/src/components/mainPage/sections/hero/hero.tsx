import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Hero_button } from "../../button/button";
import LazyHydrate from "react-lazy-hydration";

import "./hero.sass";

// hero assets
import dragon_video from "../../../../assets/main/dragon.webm";
import dragon_video_mov from "../../../../assets/main/dragon.mov";

import island1_mov from "../../../../assets/main/island1-1.mov";
import island2_mov from "../../../../assets/main/island2.mov";
import island3_mov from "../../../../assets/main/island3.mov";
import island4_mov from "../../../../assets/main/island4.mov";

import island1 from "../../../../assets/main/island1.webm";

import island2 from "../../../../assets/main/island2.webm";
import island3 from "../../../../assets/main/island3.webm";
import island4 from "../../../../assets/main/island4.webm";

import left_below_smoke from "../../../../assets/main/dragon-left-below.webp";
import right_below_smoke from "../../../../assets/main/dragon-right-below.webp";
import left_dragon_smoke from "../../../../assets/main/dragon-left.webp";
import island_first_smoke from "../../../../assets/main/island-first-smoke.webp";
import island_second_smoke from "../../../../assets/main/island-second-smoke.webp";
import header_smoke from "../../../../assets/main/header-right-smoke.webp";
import dragon_above_smoke from "../../../../assets/main/dragon-right-above.webp";
import { Trans } from "@lingui/macro";

export const Hero: FunctionComponent = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const [heroHeight, setHeroHeight] = useState("0px");
  const [heroMinHeight, setHeroMinHeight] = useState("0px");

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  // useEffect(() => {
  //   new Image().src = dragon_video_mov; // Preload
  //   new Image().src = dragon_video; // Preload
  // }, []);

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, [windowWidth]);

  useEffect(() => {
    if (windowWidth * 0.79 > windowHeight) {
      setHeroHeight("100vh");
      setHeroMinHeight(String(windowWidth / 1.5) + "px");
    } else {
      setHeroHeight(String(windowWidth * 0.79) + "px");
      setHeroMinHeight("0px");
    }
  }, [windowWidth, windowHeight]);

  let heroRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  let island1Y = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    { stiffness: 15 }
  );

  let island2Y = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "80%"]),
    { stiffness: 20 }
  );

  let island3Y = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "90%"]),
    { stiffness: 10 }
  );

  let island4Y = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "80%"]),
    { stiffness: 25 }
  );

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 50,
    },
  };

  const heroH1variants = {
    visible: { opacity: 1, scale: 1, y: 0 },

    hidden: {
      opacity: 0,
      scale: 0.85,
      y: -50,
    },
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        height: heroHeight,
        minHeight: heroMinHeight,
      }}
      className="hero"
    >
      <div className="islands">
        <motion.video
          style={{ y: island1Y }}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={variants}
          className="island1"
          playsInline
          autoPlay
          loop
          muted
        >
          <source src={island1_mov} type='video/mp4; codecs="hvc1" ' />
          <source src={island1} type="video/webm" />
        </motion.video>

        <motion.video
          style={{ y: island2Y }}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={variants}
          transition={{ delay: 0.2 }}
          className="island2"
          autoPlay
          loop
          muted
          playsInline
        >
          {" "}
          <source src={island2_mov} type='video/mp4; codecs="hvc1" ' />
          <source src={island2} type="video/webm" />
        </motion.video>

        <motion.video
          style={{ y: island3Y }}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{ type: "tween" }}
          variants={variants}
          className="island3"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={island3_mov} type='video/mp4; codecs="hvc1" ' />
          <source src={island3} type="video/webm" />
        </motion.video>

        <motion.video
          style={{ y: island4Y, x: "-50%" }}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={variants}
          className="island4"
          autoPlay
          loop
          muted
          playsInline
        >
          {" "}
          <source src={island4_mov} type='video/mp4; codecs="hvc1" ' />
          <source src={island4} type="video/webm" />
        </motion.video>
      </div>

      <video playsInline autoPlay loop muted className="dragon-img">
        <source src={dragon_video_mov} type='video/mp4; codecs="hvc1"' />
        <source src={dragon_video} type="video/webm" />
      </video>

      <div className="smokes">
        <img
          src={left_below_smoke}
          alt="smoke1"
          className="right_below smoke"
        />

        <img
          src={right_below_smoke}
          alt="smoke2"
          className="left_below smoke"
        />

        <img
          src={left_dragon_smoke}
          alt="smoke3"
          className="dragon_left smoke"
        />

        <img
          src={island_first_smoke}
          alt="smoke5"
          className="island_first smoke"
        />

        <img
          src={island_second_smoke}
          alt="smoke6"
          className="island_second smoke"
        />

        <img src={header_smoke} alt="smoke7" className="header_smoke smoke" />

        <img
          src={dragon_above_smoke}
          alt="smoke8"
          className="dragon_above smoke"
        />
      </div>

      <div className="container">
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={heroH1variants}
          transition={{ duration: 0.9 }}
          className="text_area"
        >
          <h1 className="crypto_h1">
            <Trans>CRYPTO</Trans>
          </h1>
          <h1 className="gotchies_h1">
            <Trans>GOTCHIES</Trans>
          </h1>

          <h2>
            <Trans>Unique digital pet tamagotchi-inspired NFT game</Trans>
            {/* <br />{" "} */}
          </h2>

          {/* <a href="https://cryptogotchies.gitbook.io/whitepaper/">
            <Hero_button title="LEARN MORE" />
          </a> */}
        </motion.div>
      </div>
    </section>
  );
};
