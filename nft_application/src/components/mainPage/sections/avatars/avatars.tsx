import { motion } from "framer-motion";
import { useState } from "react";
import bright_casual_sky from "../../../../assets/main/right-down-bright.webp";
import avatars_1 from "../../../../assets/main/avatars_1.webp";
import avatars_2 from "../../../../assets/main/avatars_2.webp";
import avatars_3 from "../../../../assets/main/avatars_3.webp";
import avatars_4 from "../../../../assets/main/avatars_4.webp";
import avatars_5 from "../../../../assets/main/avatars_5.webp";

import "./avatars.sass";

export function Avatars() {
  const [card1, setcard1] = useState("static");
  const [card2, setcard2] = useState("static");
  const [card3, setcard3] = useState("static");
  const [card4, setcard4] = useState("static");
  const [card5, setcard5] = useState("static");
  const sky_variants = {
    visible: { opacity: 0.6, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
  };

  const avatarsVariants = {
    hovered: { scale: 1.2 },
    under_hovered: { scale: 0.9 },
    static: { scale: 1 },
  };

  return (
    <section id="avatars" className="avatars">
      <motion.img
        initial={"hidden"}
        variants={sky_variants}
        transition={{
          duration: 1,
        }}
        viewport={{
          amount: 0.2,
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

      <div className="container">
        <div className="screen_img">
          <div className="cude-imgs">
            <motion.img
              initial={"static"}
              variants={avatarsVariants}
              animate={card1}
              onHoverStart={(e) => {
                setcard1("hovered");
                setcard2("under_hovered");
                setcard3("under_hovered");
                setcard4("under_hovered");
                setcard5("under_hovered");
              }}
              onHoverEnd={(e) => {
                setcard1("static");
                setcard2("static");
                setcard3("static");
                setcard4("static");
                setcard5("static");
              }}
              src={avatars_1}
              alt="avatars container"
              className="first"
            />
            <motion.img
              initial={"static"}
              variants={avatarsVariants}
              animate={card2}
              onHoverStart={(e) => {
                setcard1("under_hovered");
                setcard2("hovered");
                setcard3("under_hovered");
                setcard4("under_hovered");
                setcard5("under_hovered");
              }}
              onHoverEnd={(e) => {
                setcard1("static");
                setcard2("static");
                setcard3("static");
                setcard4("static");
                setcard5("static");
              }}
              src={avatars_2}
              alt="avatars container"
              className="second"
            />

            <motion.img
              initial={"static"}
              variants={avatarsVariants}
              animate={card3}
              onHoverStart={(e) => {
                setcard1("under_hovered");
                setcard2("under_hovered");
                setcard3("hovered");
                setcard4("under_hovered");
                setcard5("under_hovered");
              }}
              onHoverEnd={(e) => {
                setcard1("static");
                setcard2("static");
                setcard3("static");
                setcard4("static");
                setcard5("static");
              }}
              src={avatars_3}
              alt="avatars container"
              className="third"
            />
            <motion.img
              initial={"static"}
              variants={avatarsVariants}
              animate={card4}
              onHoverStart={(e) => {
                setcard1("under_hovered");
                setcard2("under_hovered");
                setcard3("under_hovered");
                setcard4("hovered");
                setcard5("under_hovered");
              }}
              onHoverEnd={(e) => {
                setcard1("static");
                setcard2("static");
                setcard3("static");
                setcard4("static");
                setcard5("static");
              }}
              src={avatars_4}
              alt="avatars container"
              className="fourth"
            />
          </div>

          <div className="last">
            <motion.img
              initial={"static"}
              variants={avatarsVariants}
              animate={card5}
              onHoverStart={(e) => {
                setcard1("under_hovered");
                setcard2("under_hovered");
                setcard3("under_hovered");
                setcard4("under_hovered");
                setcard5("hovered");
              }}
              onHoverEnd={(e) => {
                setcard1("static");
                setcard2("static");
                setcard3("static");
                setcard4("static");
                setcard5("static");
              }}
              src={avatars_5}
              alt="avatars container"
              className="last_img"
            />
          </div>
        </div>
        <div className="text">
          <h2>Meet Gotchies</h2>
          <h3>
            Gotchies are digital pet NFTs which you'll need to take care of and
            earn $GOTCHI rewards for it. Each Gotchi is unique! They come from
            Eggs. Depending on rarity, each has different earning potential.
            During the game you will go through 4 evolution stages such as Baby,
            Child, Teen and adult. Each stage has different experience to it
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
            Mint your Gotchi
          </motion.button>
        </div>
      </div>
    </section>
  );
}
