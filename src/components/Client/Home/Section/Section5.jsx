import React from "react";
import { HomeSection5Items } from "../../../../Utils/temp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
const Section5 = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center gap-32">
      <div className="mt-10  pb-2">
        <h3 className="uppercase font-LexendDeca font-extralight -tracking-tighter text-[25px]">
          Tin tức
        </h3>
      </div>

      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        // navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper  "
      >
        {HomeSection5Items.map((items, idx) => (
          <SwiperSlide>
            <div className="flex gap-1 h-[600px] font-Montserrat" key={idx}>
              <div className="flex-1">
                <img
                  src={items.image}
                  alt="image"
                  className="w-[900px]  object-cover"
                />
              </div>
              <div className="flex flex-col items-start flex-1 gap-4 ">
                <div className="uppercase bg-blue-400 text-white p-1 text-[12px]">
                  Hot news
                </div>
                <h3 className="text-[28px] font-extralight text-[#333333] w-[743px]">
                  {items.title}
                </h3>
                <p className="text-[#666666] w-[743px]">{items.content}</p>
                <div className="border text-blue-400 py-3 px-6 border-blue-400">
                  Đọc thêm
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Section5;
