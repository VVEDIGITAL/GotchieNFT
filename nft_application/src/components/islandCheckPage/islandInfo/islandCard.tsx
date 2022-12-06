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

          <div className="attrs">
            {attributes?.map((attr) => (
              <>
                {" "}
                <h3>
                  {attr.trait_type}: <span>{attr.value}</span>
                </h3>{" "}
              </>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export const MGotchie_card = motion(IslandCard);
