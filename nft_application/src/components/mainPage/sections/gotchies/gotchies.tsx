import { MGotchie_card } from "../../gotchie_card/gotchie_card";
import { Slider } from "../../slider/slider";

import g_boy_webm from "../../../../assets/main/gotchie_boy1.webm";
import g_boy1_webm from "../../../../assets/main/gotchie_boy3.webm";
import g_boy2_webm from "../../../../assets/main/gotchie_boy5.webm";
import g_girl_webm from "../../../../assets/main/gotchie_girl.webm";
import g_dragon_webm from "../../../../assets/main/gotchie_dragon.webm";

import g_boy from "../../../../assets/main/gotchie_boy1.mp4";
import g_boy1 from "../../../../assets/main/gotchie_boy3.mp4";
import g_boy2 from "../../../../assets/main/gotchie_boy5.mp4";
import g_girl from "../../../../assets/main/gotchie_girl.mp4";
import g_dragon from "../../../../assets/main/gotchie_dragon.mp4";

import island3 from "../../../../assets/main/island3.webm";

import bright_casual_sky from "../../../../assets/main/right-down-bright.webp";
import island3_mov from "../../../../assets/main/island3.mov";

import "./gotchies.sass";

export function Gotchies() {
  const gotchieVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    },

    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        delay: 0,
        duration: 1,
      },
    },

    hovered: {
      scale: 1.2,
      transition: {
        delay: 0,
        duration: 0.5,
      },
    },
  };
  return (
    <section id="gotchies" className="gotchies">
      <div className="gotchies_island1">
        <video loop autoPlay muted playsInline>
          <source src={island3_mov} type='video/mp4; codecs="hvc1" ' />
          <source src={island3} type="video/webm" />
        </video>
      </div>

      <div className="gotchies_island2">
        <video loop autoPlay muted playsInline>
          <source src={island3_mov} type='video/mp4; codecs="hvc1" ' />
          <source src={island3} type="video/webm" />
        </video>
      </div>

      <div className="container">
        {/* <img src={island3} alt="island" className="gotchies_island1" />
        <img src={island3} alt="island" className="gotchies_island2" /> */}

        <div className="gotchies_smoke">
          <img src={bright_casual_sky} alt="smoke" />
        </div>

        <h2>Gotchies Time!</h2>

        <div className="cards">
          <MGotchie_card
            viewport={{
              once: true,
            }}
            initial={"hidden"}
            whileInView={"visible"}
            whileHover={"hovered"}
            variants={gotchieVariants}
            img={g_girl}
            title="Olivia"
            supply="Child: 50"
            rarety="free"
            market_url="/"
          />

          <MGotchie_card
            viewport={{
              once: true,
            }}
            initial={"hidden"}
            whileInView={"visible"}
            whileHover={"hovered"}
            variants={gotchieVariants}
            img={g_boy2}
            title="Andrew"
            supply="Teen: 100"
            rarety="common"
            market_url="/"
          />

          <MGotchie_card
            viewport={{
              once: true,
            }}
            initial={"hidden"}
            whileInView={"visible"}
            whileHover={"hovered"}
            variants={gotchieVariants}
            img={g_boy}
            title="William"
            supply="Adult: 10"
            rarety="uncommon"
            market_url="/"
          />
        </div>
        <div className="second_cards">
          <MGotchie_card
            viewport={{
              once: true,
            }}
            initial={"hidden"}
            whileInView={"visible"}
            whileHover={"hovered"}
            variants={gotchieVariants}
            img={g_boy1}
            title="Stewart"
            supply="Child: 70"
            rarety="rare"
            market_url="/"
          />

          <MGotchie_card
            viewport={{
              once: true,
            }}
            initial={"hidden"}
            whileInView={"visible"}
            whileHover={"hovered"}
            variants={gotchieVariants}
            img={g_dragon}
            title="Ava"
            supply="Baby: 5"
            rarety="legendary"
            market_url="/"
          />
        </div>
        <Slider />
      </div>
    </section>
  );
}
