import React from "react";
import Star from '/src/assets/icons/Star.svg'
import User from '/src/assets/icons/User.svg'

const RightInfo = ({image, creator, people, rate}) => {
  return (
    <div className="min-w-[320px]">
      <img src={image} className="w-[320px] h-[180px] mb-4" alt="" />
      <div className="flex flex-col gap-y-2 text-lg font-semibold">
        <span>{creator}</span> 
        <div className="flex flex-row">
          <User className="mr-2" alt="" />
          <span>{people}</span>
        </div> 
        <div className="flex flex-row">
          <Star className="mr-2" alt="" />
          <span className="">{rate}</span>
        </div>
      </div>
    </div>
  );
};

export default RightInfo;
