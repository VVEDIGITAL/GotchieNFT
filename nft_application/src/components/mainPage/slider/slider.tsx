import React, { FunctionComponent } from "react";

import "./slider.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "./slider.sass";
import "swiper/css";
import "swiper/css/autoplay";

import { useSwiper } from "swiper/react";
import { Gotchie_card } from "../gotchie_card/gotchie_card";

import g_boy from "../../../assets/main/gotchie_boy1.mp4";
import g_boy1 from "../../../assets/main/gotchie_boy3.mp4";
import g_boy2 from "../../../assets/main/gotchie_boy5.mp4";
import g_girl from "../../../assets/main/gotchie_girl.mp4";
import g_dragon from "../../../assets/main/gotchie_dragon.mp4";
import { t } from "@lingui/macro";

export const Slider: FunctionComponent = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className="swiper_container">
        <Swiper
          autoplay={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          navigation={{
            nextEl: ".swiper-button-nextt",
            prevEl: ".swiper-button-prevv",
            disabledClass: "disable", // When the navigation button is not available, the Class is added, that is, when the Swiper index is 0, the last Class class name without prevel will add a disable, which is .swiper-button-prev .disable
          }}
        >
          <div className="mySlider_Wrapper">
            <SwiperSlide>
              <Gotchie_card
                img={g_girl}
                title={t({
                  id: "title.1",
                  message: `Olivia`,
                })}
                supply={t({
                  id: "supply.1",
                  message: `Child: 50`,
                })}
                rarety={t({
                  id: "rarety.1",
                  message: `free`,
                })}
                raretyUI="free"
                market_url="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Gotchie_card
                img={g_boy2}
                title={t({
                  id: "title.2",
                  message: `Andrew`,
                })}
                supply={t({
                  id: "supply.2",
                  message: `Teen: 100`,
                })}
                rarety={t({
                  id: "rarety.2",
                  message: `common`,
                })}
                raretyUI="common"
                market_url="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Gotchie_card
                img={g_boy}
                title={t({
                  id: "title.3",
                  message: `William`,
                })}
                supply={t({
                  id: "supply.3",
                  message: `Adult: 10`,
                })}
                rarety={t({
                  id: "rarety.3",
                  message: `uncommon`,
                })}
                raretyUI="uncommon"
                market_url="/"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Gotchie_card
                img={g_boy1}
                title={t({
                  id: "title.4",
                  message: `Stewart`,
                })}
                supply={t({
                  id: "supply.4",
                  message: `Child: 70`,
                })}
                rarety={t({
                  id: "rarety.4",
                  message: `rare`,
                })}
                raretyUI="rare"
                market_url="/"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Gotchie_card
                img={g_dragon}
                title={t({
                  id: "title.5",
                  message: `Ava`,
                })}
                supply={t({
                  id: "supply.5",
                  message: `Baby: 5`,
                })}
                rarety={t({
                  id: "rarety.5",
                  message: `legendary`,
                })}
                raretyUI="legendary"
                market_url="/"
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};
