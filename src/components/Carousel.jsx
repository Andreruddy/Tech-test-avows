import React from "react";
import { Navigation, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import transaksi from "../json/transaksi.json";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function Carousel() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <section className="h-screen">
        <div className="container h-full px-6 py-24">
          <div className="flex justify-start mb-5">
            <h1 className="font-bold text-3xl">Promo dan Info Terbaru</h1>
          </div>
          <Swiper
            modules={[Navigation, EffectFade, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2000 }}
            effect="fade"
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {transaksi.img_swipper.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <a href={item.linkUrl}>
                    <img src={item.imgUrl} className="rounded-lg" />
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}
