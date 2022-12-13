import React from "react";
import { Trans } from "@lingui/macro";
import { motion } from "framer-motion";
import { Sidebar } from "../../components/mint/sidebar/sidebar";
import mini_logo from "../../assets/main/stageLogo.webp";
import "./errorPage.sass";

import island4 from "../../assets/mint/island4.png";
import island2 from "../../assets/mint/island2.png";

import shark_bright_sky from "../../assets/main/left-bright-sky.webp";
import bright_casual_sky from "../../assets/main/right-down-bright.webp";

import change_island from "../../assets/mint/island_change.webm";
import change_island_mov from "../../assets/mint/change_islands2-1.mov";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const heroH1variants = {
  visible: { opacity: 1, scale: 1, y: 0 },

  hidden: {
    opacity: 0,
    scale: 0.85,
    y: -50,
  },
};

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="full_error_container">
        <Sidebar
          pageWrapId={"full_error_container"}
          outerContainerId={"root"}
        />
        <section className="error">
          <img src={island4} alt="right island" className="right-island" />
          <img src={island2} alt="left top island" className="left-island" />

          <img src={shark_bright_sky} alt="left sky" className="left-sky" />
          <img src={bright_casual_sky} alt="right sky" className="right-sky " />

          <div className="container">
            <motion.div
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true }}
              variants={heroH1variants}
              transition={{ duration: 0.9 }}
              className="title-block"
            >
              <img src={mini_logo} alt="mini-logo" className="top-logo" />
              <h1>
                {" "}
                <Trans>Error</Trans>{" "}
              </h1>
            </motion.div>
            <div className="content">
              <h2>404</h2>

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
                onClick={() => navigate(`/`)}
              >
                <Trans>Home</Trans>
              </motion.button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
