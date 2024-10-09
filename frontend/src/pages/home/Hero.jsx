import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "../../asstes/hero-carosel/pexels-photo-1458457.jpeg";
import Img2 from "../../asstes/hero-carosel/pexels-photo-258154.webp";
import Img3 from "../../asstes/hero-carosel/pexels-photo-261102.jpeg";
import Img4 from "../../asstes/hero-carosel/pexels-photo-261169.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8">
      <div className="md:w-1/2 w-full text-center">
        <h1 className="md:text-4xl text-3xl font-bold md:leading-tight">
          Hotels With Best View Near Me
        </h1>
        <p className="py-3 ">
          Discovering best hotels near you! Whether you're planning a luxurious
          staycation or a weekend getway, curated selection of hotels with best
          view and best experience will help you beat the heat and elevate your
          travel experience.
        </p>
      </div>
      {/* Carosel */}
      <div className="md:w-1/2 w-full mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1900,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Img1} alt="" className="w-full lg:h-[410] sm:h-80 h-18" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img2} alt="" className="w-full lg:h-[410] sm:h-80 h-18" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img3} alt="" className="w-full lg:h-[410] sm:h-80 h-18" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img4} alt="" className="w-full lg:h-[410] sm:h-80 h-18" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
