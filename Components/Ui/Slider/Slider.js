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
        {data &&
          data.map((item, index) => {
            const { feature_image, id, title, slug } = item;

            return (
              <SwiperSlide className={Styles.swiperSlide} key={index}>
                <Image
                  key={id}
                  loader={() =>
                    feature_image == null ? "/images/kids.jpg" : feature_image
                  }
                  src={
                    feature_image == null ? "/images/kids.jpg" : feature_image
                  }
                  height={300}
                  width={300}
                  alt={id}
                  priority
                />
                <div className={Styles.swiperContent} key={index}>
                  <div>
                    <p>update</p>
                    <h3>{title}</h3>
                    <StyledButton primary color={color}>
                      <Link
                        className={Styles.articleLink}
                        href={`/blog/${slug}`}
                      >
                        Read Article
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
