import React from "react";
import Star from '/src/assets/icons/Star.svg'

const Card = ({ title, organizer, participants, rate, image, username }) => {
  return (
    <div className="min-w-[136px] max-w-[255px] w-full bg-gray-50 hover:bg-lightwhiteturquoise cursor-pointer text-dark rounded-xl">
      <img src={image} className="w-[255px]" alt="Check" />
      <div className="flex flex-col p-2 gap-y-2">
        <p className="line-clamp-2 text-xl mb-2">{title}</p>
        <span className="">{organizer}</span>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-1">
            <img src={username} className="w-5" alt="" />
            <span className="">{participants}</span>
          </div>
          <div className="flex flex-row gap-1">
            <img src={Star} className="w-5" alt="" />
            <span>{rate}</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Card;
