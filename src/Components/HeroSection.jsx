import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Banner1 from "../assets/banners/banner1.png";
import Banner2 from "../assets/banners/banner2.png";
import Banner3 from "../assets/banners/banner3.png";

const banners = [Banner1, Banner2, Banner3];

const HeroSection = () => {
  return (
    <section className="pt-36">
      <div className="max-w-7xl mx-auto px-4">

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
          speed={800}
          className="rounded-3xl shadow-xl"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                // className="w-full h-[180px] sm:h-[240px] md:h-[300px] lg:h-[380px] object-fit rounded-3xl"
                className="w-full h-[180px] sm:h-[240px] md:h-[300px] lg:h-[380px] rounded-3xl bg-center bg-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default HeroSection;