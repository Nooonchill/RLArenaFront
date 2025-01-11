import React from "react";
import Star from '../../assets/icons/Star.svg'
import User from '../../assets/icons/User.svg'

const AdditionalInfo = ({ creator, people, rate }) => {
  return (
    <>
      <span>{creator}</span>
      <div className="flex flex-row">
        <User className="mr-2" alt="Пользователи" />
        <span>{people}</span>
      </div>
      <div className="flex flex-row">
        <Star className="mr-2" alt="Рейтинг" />
        <span >{rate}</span>
      </div>
    </>
  );
};

export default AdditionalInfo;
