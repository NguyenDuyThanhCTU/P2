import React from "react";
// import { Link } from "react-router-dom";

const Card = ({ image, title, content, date, type, size }) => {
  return (
    // <Link to={link}>
    <div
      className={`bg-white hover:shadow-2xl rounded-2xl w-[400px] h-[${size}px] cursor-pointer`}
    >
      <div className="relative">
        <img
          src={image}
          alt="img"
          className=" object-contain rounded-t-2xl w-full"
        />
        {type && (
          <div className="bg-white  text-[14px] font-bold absolute top-0 right-0 p-3 uppercase rounded-bl-2xl">
            {type}
          </div>
        )}
      </div>

      <div className="py-6 px-5 flex  flex-col gap-3 justify-start">
        <div>
          {date && <p>{date}</p>}
          <h3 className="text-[24px]">{title}</h3>
        </div>
        <p className="font-thin truncate5 ">{content}</p>
      </div>
    </div>
    // </Link>
  );
};

export default Card;
