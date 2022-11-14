import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Styles from "./Slider.module.css";
import Image from "next/image";
import { StyledButton } from "../StyledButton";
import Link from "next/link";
const Slider = ({ data, color }) => {
  return (
    <div className={Styles.container}>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        spaceBetween={50}
        slidesPerView={1}
        speed={500}
        loop={true}
        touchRatio={1.5}
        navigation={true}
        effect="flip"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={Styles.mySwiper}
      >
        {data.map((item) => {
          return (
            <SwiperSlide className={Styles.swiperSlide} key={item.id}>
              <Image
                src={item.src}
                height={300}
                width={300}
                alt="slider image"
                priority
              />
              <div className={Styles.swiperContent}>
                <div>
                  <p>update</p>
                  <h3>{item.description}</h3>
                  <StyledButton primary color={color}>
                    <Link className={Styles.articleLink} href="/blog">
                      Read Articles
                    </Link>
                  </StyledButton>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>{" "}
    </div>
  );
};

export default Slider;
