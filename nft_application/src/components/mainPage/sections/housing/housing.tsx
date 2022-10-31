import { motion } from "framer-motion";
import room1 from "../../../../assets/main/house1.webp";
import room2 from "../../../../assets/main/house2.webp";
import room3 from "../../../../assets/main/house3.webp";
import room4 from "../../../../assets/main/house4.webp";

import "./housing.sass";

export function Housing() {
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 0,
    },
  };
  return (
    <section id="housing" className="housing">
      <div className="container">
        <h1>Housing</h1>
        <h3>
          Now your Gotchies can have a house! And you can furnish it yourself!
          The furniture has the functionality of additional bonuses, as well as
          unique properties for the economy of the game. Players will be able to
          buy items that have the functionality of production of consumables, as
          well as sell services to other players (buffs, paid crafting) or even
          host a poker tournament.
        </h3>

        <div className="rooms">
          <motion.img
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            variants={variants}
            src={room1}
            alt="Rooms-IMG"
            className="room1"
          />
          <motion.img
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            variants={variants}
            src={room2}
            alt="Rooms-IMG"
            className="room2"
          />
          <motion.img
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            variants={variants}
            src={room3}
            alt="Rooms-IMG"
            className="room3"
          />
          <motion.img
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.9,
            }}
            variants={variants}
            src={room4}
            alt="Rooms-IMG"
            className="room4"
          />
        </div>

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
          Learn More
        </motion.button>
      </div>
    </section>
  );
}
