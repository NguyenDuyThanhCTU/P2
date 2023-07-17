import React from "react";
import { HomeSection4Items } from "../../../../Utils/temp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";
const Section4 = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center">
      <div className="w-[900px] overflow-hidden flex flex-col items-center">
        <div className="mt-5  pb-2 flex flex-col items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/xedienmientay-346f8.appspot.com/o/Xe%20%C4%90i%E1%BB%87n%20Mi%E1%BB%81n%20T%C3%A2y.png?alt=media&token=27e5018e-ffbe-4c11-9e08-11ba0d15c594"
            alt="logo"
            className="w-[120px] h-[120px]"
          />
          <h3 className="uppercase font-LexendDeca font-light -tracking-tighter">
            Xe điện miền tây
          </h3>
          <span className="h-[1px] w-16 bg-blue-500 mt-5"></span>
        </div>

        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper  "
        >
          {HomeSection4Items.map((items, idx) => (
            <SwiperSlide>
              <div className="flex flex-col items-center gap-5 font-Montserrat">
                <div>
                  <img
                    src={items.image}
                    alt="img"
                    className="w-[700px] h-[495px]"
                  />
                </div>
                <h3 className="font-light text-[34px]">{items.name}</h3>
                <p>Giá từ: {items.price}</p>
                <div className="grid gap-2 grid-cols-2">
                  <div className="px-10 py-2 bg-blue-500 text-white text-center">
                    Đặt cọc
                  </div>
                  <div className="px-10 py-2 bg-white border-blue-500 border-2">
                    Xem chi tiết
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Section4;
