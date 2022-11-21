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
                title="Gotcha Girl"
                supply="Child: 50"
                rarety="free"
                market_url="/"
                name="Olivia"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Gotchie_card
                img={g_boy2}
                title="Gotcha Boy"
                supply="Teen: 100"
                rarety="common"
                market_url="/"
                name="Andrew"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Gotchie_card
                img={g_boy}
                title="Trendy Gotch"
                supply="Adult: 10"
                rarety="uncommon"
                market_url="/"
                name="William"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Gotchie_card
                img={g_boy1}
                title="Beachy gotch"
                supply="Child: 70"
                rarety="rare"
                market_url="/"
                name="Stewart"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Gotchie_card
                img={g_dragon}
                title="Gotcha Dragon"
                supply="Baby: 5"
                rarety="legendary"
                market_url="/"
                name="Ava"
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};
