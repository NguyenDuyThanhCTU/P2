import React, { useState } from "react";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import Section3 from "./Section/Section3";
import Section4 from "./Section/Section4";
import Section5 from "./Section/Section5";
import Section6 from "./Section/Section6";
import { HomeNavItems } from "../../../Utils/item";
import { Link } from "react-scroll";

const Home = () => {
  const [isChange, setIsChange] = useState(0);
  const HandleChange = (idx) => {
    if (idx === 0) {
      setIsChange(0);
    } else if (idx === 1) {
      setIsChange(-937);
    } else if (idx === 2) {
      setIsChange(-1874);
    } else if (idx === 3) {
      setIsChange(-2811);
    } else if (idx === 4) {
      setIsChange(-3748);
    } else if (idx === 5) {
      setIsChange(-4685);
    } else if (idx === 5) {
      setIsChange(-5622);
    }
  };
  return (
    <div className="relative">
      {/* <div className=" bottom-10 left-10 z-30 fixed font-LexendDeca">
        {HomeNavItems.map((items, idx) => (
          <>
            <div className="cursor-pointer">
              <Link to={items.location} spy={true} smooth={true} duration={500}>
                <h3 className="hover:scale-110 duration-300">{items.name}</h3>
              </Link>
            </div>
          </>
        ))}
      </div> */}
      {/* <div
        className={`duration-300  transform translate-y-[-5022px] transition `}
      > */}
      <div>
        <div id="Section1">
          <Section1 />
        </div>
        <div id="Section2">
          {" "}
          <Section2 />
        </div>
        <div id="Section3">
          <Section3 />
        </div>
        <div id="Section4">
          {" "}
          <Section4 />
        </div>
        <div id="Section5">
          {" "}
          <Section5 />
        </div>
        <div id="Section6">
          {" "}
          <Section6 />
        </div>
      </div>
    </div>
  );
};

export default Home;
