import React, { useState } from "react";
import { VscPlay } from "react-icons/vsc";
import { RiCloseCircleFill } from "react-icons/ri";
const Section3 = () => {
  const [isClick, setIsClick] = useState(false);
  return (
    <div className="w-full h-full relative">
      <img
        src="https://wuling-ev.vn/Content/images/img-video.jpeg"
        alt="img"
        className="w-full h-full"
      />
      {isClick ? (
        <div className="w-full h-screen justify-center flex items-center absolute bottom-0 bg-[rgba(0,0,0,0.3)]">
          <div>
            <div className="flex justify-end text-[40px] ">
              {" "}
              <RiCloseCircleFill
                className="text-[rgba(255,255,255,0.3)] cursor-pointer "
                onClick={() => setIsClick(false)}
              />
            </div>
            <iframe
              width="958"
              height="564"
              src="https://www.youtube.com/embed/6qnGVs5RW3g"
              title="Wuling HongGuang MiniEV - Tiên phong khai mở phân khúc ô tô điện mini đầu tiên tại Việt Nam"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen justify-center flex items-center absolute bottom-0">
          <VscPlay
            className=" text-[100px] font-thin border-4 p-5 rounded-full border-white hover:scale-125 duration-300 cursor-pointer text-white
      "
            onClick={() => setIsClick(true)}
          />
        </div>
      )}
    </div>
  );
};

export default Section3;
