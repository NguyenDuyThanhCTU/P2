"use client";

import { SlOptions } from "react-icons/sl";
import { AiOutlineDown } from "react-icons/ai";
import { HeaderItems } from "../../../Utils/item";
import DropHeader from "../Item/DropHeader";

const Header = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-between px-10  w-full shadow-2xl ">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/xedienmientay-346f8.appspot.com/o/Xe%20%C4%90i%E1%BB%87n%20Mi%E1%BB%81n%20T%C3%A2y.png?alt=media&token=27e5018e-ffbe-4c11-9e08-11ba0d15c594"
            alt="logo"
            className="w-[100px] h-[100px]"
          />
        </div>
        <div>
          <div className="flex gap-10 items-center">
            {HeaderItems.map((items, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <h3 className="uppercase hover:text-blue-600 cursor-pointer font-light text-[#333] tracking-wider">
                  {items.name}
                </h3>
                <AiOutlineDown className="text-gray-400 text-[14px]" />
              </div>
            ))}
            <SlOptions className="text-[20px]" />
          </div>
        </div>
      </div>
      {/* <DropHeader /> */}
    </div>
  );
};

export default Header;
