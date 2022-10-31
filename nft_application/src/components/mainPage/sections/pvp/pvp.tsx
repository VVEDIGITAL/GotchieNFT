import pvp from "../../../../assets/main/pvp-bg.webp";
import pvpFly from "../../../../assets/main/fly-pvp.webp";

import "./pvp.sass";
import { motion } from "framer-motion";

export function Pvp() {
  return (
    <section className="pvp">
      <div className="container">
        <h1>PVP Coming This Winter</h1>
        <img src={pvp} alt="pvp await img" className="bg" />
        <motion.img
          animate={{ y: "-7%" }}
          transition={{
            ease: "easeInOut",
            duration: 1.5,
            repeatType: "reverse",
            repeat: Infinity,
            type: "tween",
          }}
          src={pvpFly}
          alt="pvp fly"
          className="gotchie-flying"
        />
      </div>
    </section>
  );
}
