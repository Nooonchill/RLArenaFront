import React from "react";
import { useNavigate } from 'react-router-dom';
import Star from '/src/assets/icons/Star.svg'
import User from '/src/assets/icons/User.svg'

const Card = ({ title, organizer, participants, rate, image, startDate, endDate, onClick }) => {

  startDate = startDate.replaceAll("-", ".");
  endDate = endDate.replaceAll("-", ".");

  return (
    <div onClick={onClick} className="min-w-[136px] max-w-[255px] w-full bg-gray-50 hover:bg-lightwhiteturquoise cursor-pointer text-dark rounded-xl">
      <img src={image} className="w-[255px]" alt="Check" />
      <div className="flex flex-col p-2 gap-y-2">
        <p className="line-clamp-2 text-xl mb-2">{title}</p>
        <span className="">{organizer}</span>
        <span className="">{startDate} - {endDate}</span>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-1">
            <img src={User} className="w-5" alt="" />
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
