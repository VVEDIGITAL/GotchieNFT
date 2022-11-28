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
        <h1>Gotchi Space</h1>
        <h3>
          All Gotchies have their own Space! You can customize it using
          furniture. The furniture has the added functionality of providing
          passive bonuses. The players can reduce the recovery time of each
          attribute of the chosen Gotchi. As well as some production
          capabilities of consumable items.
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

        {/* <motion.button
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
        </motion.button> */}
      </div>
    </section>
  );
}
