import { Trans } from "@lingui/macro";
import { motion } from "framer-motion";
import { forwardRef, Ref, useState } from "react";
import "./islandCard.sass";

export interface Attribute {
  trait_type: string;
  value: any;
}

export interface InformationI {
  description: string | undefined;
  name: string | undefined;
  image: string | undefined;
  attributes: Attribute[] | undefined;
}

export const IslandCard = forwardRef(
  (
    { description, name, image, attributes }: InformationI,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className="island-card">
        {/* <img src={image} alt="island" /> */}
        <div className="content">
          <h3>
            <Trans>Name:</Trans> <br />
            <span>{name}</span>
          </h3>
          <h3>
            <Trans>Description:</Trans>
            <br />
            <span>{description}</span>
          </h3>

          {/* <div className="attrs">
            {attributes?.map((attr) => (
              <>
                {" "}
                <h3>
                  {attr.trait_type}: <span>{attr.value}</span>
                </h3>{" "}
              </>
            ))} */}
          {/* </div> */}

          <div className="attrs">
            {attributes ? (
              <>
                {" "}
                <h3>
                  <Trans>Rarity:</Trans> <span>{attributes[0]?.value}</span>
                </h3>{" "}
                <h3>
                  <Trans>Energy:</Trans> <span>{attributes[1]?.value}</span>
                </h3>{" "}
                <h3>
                  <Trans>Durability:</Trans> <span>{attributes[2]?.value}</span>
                </h3>{" "}
                <h3>
                  <Trans>Shards:</Trans> <span>{attributes[3]?.value}</span>
                </h3>{" "}
                <h3>
                  <Trans>Max_property:</Trans>{" "}
                  <span>{attributes[4]?.value}</span>
                </h3>{" "}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export const MGotchie_card = motion(IslandCard);
