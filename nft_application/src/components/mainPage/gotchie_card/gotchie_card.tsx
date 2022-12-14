import { Trans } from "@lingui/macro";
import { motion } from "framer-motion";
import React, { forwardRef, Ref, useEffect, useRef, useState } from "react";
import "./gotchie_card.sass";

interface GotchieCardI {
  img: any;
  title: string;
  rarety: string;
  raretyUI: string;
  supply: string;
  market_url: string;
}

export const Gotchie_card = forwardRef(
  (
    { img, title, rarety, supply, raretyUI, market_url }: GotchieCardI,
    ref: Ref<HTMLDivElement>
  ) => {
    const [isClicked, setClicked] = useState(false);

    const clickText = () => {
      setClicked(true);

      setTimeout(() => {
        setClicked(false);
      }, 3000);
    };
    return (
      <div ref={ref} className="gotchie_card">
        <div className="gotchie-img">
          <video autoPlay playsInline loop muted>
            <source src={img} type="video/mp4" />
          </video>
        </div>
        <div className="description">
          <div className="first_line">
            <span className="title">{title}</span>
            <button className={raretyUI}>{rarety}</button>
          </div>
          <div className="second_line">
            <span className="supply">{supply}</span>
            {/* <a href={market_url}>Buy on platform {">"}</a>{" "} */}
            {isClicked ? (
              <a>
                {"<"} <Trans>Coming Soon</Trans> {">"}
              </a>
            ) : (
              <a onClick={clickText}>
                <Trans>Buy on platform</Trans> {">"}
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export const MGotchie_card = motion(Gotchie_card);
