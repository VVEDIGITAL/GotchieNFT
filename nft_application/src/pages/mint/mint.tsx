import "./mint.sass";
import mini_logo from "../../assets/main/stageLogo.webp";

import island4 from "../../assets/mint/island4.png";
import island2 from "../../assets/mint/island2.png";

import shark_bright_sky from "../../assets/main/left-bright-sky.webp";
import bright_casual_sky from "../../assets/main/right-down-bright.webp";
import change_island from "../../assets/mint/island_change.webm";
import change_island_mov from "../../assets/mint/change_islands2-1.mov";
import { useState } from "react";
import { motion } from "framer-motion";

export function Mint() {
  const [active, setActive] = useState("");

  const handleClick = (number: string) => {
    setActive(number);
  };

  return (
    <>
      <div className="full_mint_container">
        <section className="mint">
          <img src={island4} alt="right island" className="right-island" />
          <img src={island2} alt="left top island" className="left-island" />

          <img src={shark_bright_sky} alt="left sky" className="left-sky" />
          <img src={bright_casual_sky} alt="right sky" className="right-sky " />

          <div className="container">
            <img src={mini_logo} alt="mini-logo" className="top-logo" />
            <h1>Mint your land NFT (Game access)</h1>
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
              className="connect"
            >
              Connect With Metamsk
            </motion.button>
            <div className="content">
              <div className="image">
                <video autoPlay loop muted playsInline>
                  <source
                    src={change_island_mov}
                    type='video/mp4; codecs="hvc1"'
                  />
                  <source src={change_island} type="video/webm" />
                </video>
              </div>

              <div className="select-container">
                <h3>Select how many lands you want to mint</h3>
                <div className="buttons">
                  <button
                    className={active == "1" ? "active" : "inactive"}
                    onClick={() => handleClick("1")}
                  >
                    <img src={mini_logo} alt="img-logo" />
                    One land
                  </button>
                  <button
                    className={active == "2" ? "active" : "inactive"}
                    onClick={() => handleClick("2")}
                  >
                    <img src={mini_logo} alt="img-logo" />
                    Two lands
                  </button>
                  <button
                    className={active == "3" ? "active" : "inactive"}
                    onClick={() => handleClick("3")}
                  >
                    <img src={mini_logo} alt="img-logo" />
                    Three lands
                  </button>
                  <button
                    className={active == "4" ? "active" : "inactive"}
                    onClick={() => handleClick("4")}
                  >
                    <img src={mini_logo} alt="img-logo" />
                    Four lands
                  </button>
                </div>
                <div className="nets">
                  <a>Documentation</a>
                  <a>How to mint</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
