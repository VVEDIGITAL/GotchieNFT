import "./mint.sass";
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
import {
  contractAddress,
  contractAbi,
  network,
} from "../../connection/constants";
import { metaMaskConnector } from "../../connection/metamask";
import { useWeb3React } from "@web3-react/core";
import { BigNumber, providers, Contract } from "ethers";

const isActiveButton = (count: number, max: number) => {
  return count <= max;
};

const fetchMax = async (contract: Contract, account: string) => {
  let userNft;
  let maxNft;
  try {
    userNft = await contract?.walletOfOwner(account);
    maxNft = await contract?.maxMintPerWallet();

    userNft = userNft && userNft.length.toString();
    maxNft = maxNft && maxNft.toString();

    return maxNft - userNft;
  } catch (error) {
    console.log(error);
  }
  return 0;
};

const getContract = (provider: providers.Web3Provider, account: string) => {
  const contract = new Contract(
    contractAddress,
    contractAbi,
    provider?.getSigner(account)
  );
  return contract;
};

const useConnectButton = (): [string, () => void] => {
  const { account, chainId, provider } = useWeb3React();

  const callback = () => {};

  const connect = () => {
    try {
      metaMaskConnector.activate(network.dec);
    } catch (error) {
      console.log(error);
    }
  };

  const switchCallback = useCallback(() => {
    provider?.send("wallet_switchEthereumChain", [
      {
        chainId: network.hex,
      },
    ]);
  }, [provider]);

  if (account && chainId === network.dec) {
    return [account?.slice(0, 4) + "..." + account?.slice(-4), callback];
  }
  if (account) {
    return ["Switch network", switchCallback];
  }
  return ["Connect With Metamask", connect];
};

const heroH1variants = {
  visible: { opacity: 1, scale: 1, y: 0 },

  hidden: {
    opacity: 0,
    scale: 0.85,
    y: -50,
  },
};

export function Mint() {
  const [label, buttonClick] = useConnectButton();
  const { account, isActive, provider, chainId } = useWeb3React();
  const [maxCount, setMaxCount] = useState(0);

  const contract = useMemo(() => {
    if (isActive && account && provider) {
      return getContract(provider, account);
    }
  }, [isActive, provider, account]);

  const handleMintCallback = useCallback(
    async (count: string) => {
      contract?.cost().then((cost: BigNumber) => {
        return contract?.mint(account, BigNumber.from(count), {
          value: cost.mul(BigNumber.from(count)),
        });
      });
    },
    [contract, account]
  );

  useEffect(() => {
    const t = setInterval(() => {
      if (isActive && contract && account && chainId === network.dec) {
        fetchMax(contract, account).then((max) => {
          setMaxCount(max);
        });
        return;
      }
      setMaxCount(0);
    }, 1000);
    return () => {
      clearInterval(t);
    };
  }, [contract, account, isActive, chainId]);

  return (
    <>
      <div className="full_mint_container">
        <Sidebar pageWrapId={"full_mint_container"} outerContainerId={"root"} />
        <section className="mint">
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
              <h1>Mint your land NFT (Game access)</h1>
              {
                <motion.button
                  onClick={buttonClick}
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
                  {label}
                </motion.button>
              }
            </motion.div>
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
                    className={
                      isActiveButton(1, maxCount) ? "active" : "inactive"
                    }
                    disabled={!isActiveButton(1, maxCount)}
                    onClick={() => handleMintCallback("1")}
                  >
                    <img src={mini_logo} alt="img-logo" />
                    One land
                    <span>(0.3 BNB)</span>
                  </button>
                  <button
                    className={
                      isActiveButton(2, maxCount) ? "active" : "inactive"
                    }
                    disabled={!isActiveButton(2, maxCount)}
                    onClick={() => handleMintCallback("2")}
                  >
                    <img src={mini_logo} alt="img-logo" />
                    Two lands
                    <span>(0.6 BNB)</span>
                  </button>
                  <button
                    className={
                      isActiveButton(3, maxCount) ? "active" : "inactive"
                    }
                    disabled={!isActiveButton(3, maxCount)}
                    onClick={() => handleMintCallback("3")}
                  >
                    <img src={mini_logo} alt="img-logo" />
                    Three lands
                    <span>(0.9 BNB)</span>
                  </button>
                  <button
                    className={
                      isActiveButton(4, maxCount) ? "active" : "inactive"
                    }
                    disabled={!isActiveButton(4, maxCount)}
                    onClick={() => handleMintCallback("4")}
                  >
                    <img src={mini_logo} alt="img-logo" />
                    Four lands
                    <span>(1.2 BNB)</span>
                  </button>
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
