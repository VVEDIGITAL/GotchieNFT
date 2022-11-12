import { Variants, motion } from "framer-motion";
import screen from "../../../../assets/main/screen.webp";
import video_fire from "../../../../assets/main/video_fire.webp";
import header_smoke from "../../../../assets/main/header-right-smoke.webp";
import left_deep_sky from "../../../../assets/main/left-deep-sky.webp";
import React from "react";
import Modal from "../../../modal/modal";

import "./video.sass";

export function VideoSection() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const sky_variants = {
    visible: { opacity: 0.6, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.95,
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
    <section id="video" className="video_title">
      <Modal
        window_style="modalWindow "
        isOpen={modalIsOpen}
        onClose={closeModal}
        body={
          <>
            <iframe
              width={"100%"}
              height={"100%"}
              src="https://www.youtube.com/embed/R66w-j2SmVQ"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            ;
          </>
        }
      />
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
        src={left_deep_sky}
        alt="sky"
        className="parallax-sky"
      />

      <motion.img
        initial={"hidden"}
        variants={sky_variants} // style={{ scaleX: -1 }}
        viewport={{
          amount: 0.4,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={"visible"}
        src={header_smoke}
        alt="sky"
        className="parallax-right-sky"
      />

      <div className="container">
        <h2>
          Crypto Gotchies is a unique P2E digital pet game about cute monsters
          built on BSC.
        </h2>

        <h3>
          Crypto Gotchies is a free2play and play2earn Tamagotchi-inspired game
          in which you will take care of your little Gotchies NFT characters,
          evolve them and send them to Fun Lands to earn $GOTCHI tokens.
        </h3>

        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{
            amount: 0.6,
            once: true,
          }}
          transition={{
            duration: 1.1,
            type: "tween",
          }}
          variants={heroH1variants}
          className="video_handler"
        >
          <img src={screen} alt="vedo handler" className="handler" />

          <img src={video_fire} alt="fire" className="left-fire" />
          <img src={video_fire} alt="fire" className="right-fire" />

          <button onClick={openModal}>WATCH TRAILER</button>

          {/* <video src=""></video> */}
        </motion.div>
      </div>
    </section>
  );
}
