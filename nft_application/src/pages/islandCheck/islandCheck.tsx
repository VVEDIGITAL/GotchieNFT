import "./islandCheck.sass";
import mini_logo from "../../assets/main/stageLogo.webp";

import island4 from "../../assets/mint/island4.png";
import island2 from "../../assets/mint/island2.png";

import shark_bright_sky from "../../assets/main/left-bright-sky.webp";
import bright_casual_sky from "../../assets/main/right-down-bright.webp";

import change_island from "../../assets/mint/island_change.webm";
import change_island_mov from "../../assets/mint/change_islands2-1.mov";
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Sidebar } from "../../components/mint/sidebar/sidebar";
import { IslandCard } from "../../components/islandCheckPage/islandInfo/islandCard";

const heroH1variants = {
  visible: { opacity: 1, scale: 1, y: 0 },

  hidden: {
    opacity: 0,
    scale: 0.85,
    y: -50,
  },
};

export interface Attribute {
  trait_type: string;
  value: any;
}

export interface InformationI {
  description: string;
  name: string;
  image: string;
  attributes: Attribute[];
}

export function IslandCheckPage() {
  const [query, setQuery] = useState("");
  const [isFounded, setisFounded] = useState(false);
  const [island, setisland] = useState<InformationI>();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setQuery(enteredName);
  };

  async function getIsland(id: string) {
    try {
      const response = await fetch(
        `https://bafybeifrdgqq62gco3btv7qxy3rnldbn3sxsrx6b44ud4nnn7mk45pvkvi.ipfs.nftstorage.link/${id}.json`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      // 👇️ const result: GetUsersResponse
      const result = (await response.json()) as InformationI;

      console.log("result is: ", JSON.stringify(result, null, 4));
      console.log(result);
      setisFounded(true);
      setisland(result);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        setisFounded(false);
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }
  return (
    <>
      <div className="full_info_container">
        <Sidebar pageWrapId={"full_info_container"} outerContainerId={"root"} />
        <section className="info">
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
              <h1>Get your land information!</h1>
              {/* {
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
                  onClick={() => {
                    getIsland(query);
                  }}
                >
                  Search
                </motion.button>
              } */}
            </motion.div>
            <div className="content">
              {!isFounded ? (
                <div className="image">
                  <video autoPlay loop muted playsInline>
                    <source
                      src={change_island_mov}
                      type='video/mp4; codecs="hvc1"'
                    />
                    <source src={change_island} type="video/webm" />
                  </video>
                </div>
              ) : (
                <IslandCard
                  description={island?.description}
                  image={island?.image}
                  name={island?.name}
                  attributes={island?.attributes}
                />
              )}

              <div className="select-container">
                <h3>Type an island number</h3>
                <div className="buttons">
                  <input
                    value={query}
                    onChange={inputHandler}
                    placeholder="Search island"
                    className="input"
                    type="number"
                    required={true}
                  />
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
                    onClick={() => {
                      getIsland(query);
                    }}
                  >
                    Search
                  </motion.button>
                </div>
                <div className="nets">
                  <a href="https://cryptogotchies.gitbook.io/whitepaper/game-elements/fun-lands">
                    Learn about Fun Lands
                  </a>
                  <a href="https://cryptogotchies.gitbook.io/whitepaper/how-to-mint">
                    How to mint
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
