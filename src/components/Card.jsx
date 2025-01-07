import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Star from '/src/assets/icons/Star.svg';
import User from '/src/assets/icons/User.svg';
import Add from '/src/assets/icons/Add.svg';
import Remove from '/src/assets/icons/Remove.svg';

const Card = ({ title, organizer, participants, rate, image, startDate, endDate, onClick, onButtonClick, added }) => {
  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки картинки

  // Форматируем даты
  startDate = startDate.replaceAll("-", ".");
  if (endDate !== undefined) {
    endDate = endDate.replaceAll("-", ".");
  }

  // Функция для предварительной загрузки изображения
  const checkImageLoaded = (src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoading(false); // Когда изображение загружено, меняем состояние
    img.onerror = () => setIsLoading(false); // Обработчик ошибок загрузки
  };

  useEffect(() => {
    checkImageLoaded(image); // Вызываем проверку при изменении src изображения
  }, [image]);

  return (
    <div onClick={onClick} className="min-w-[136px] max-w-[255px] w-full bg-gray-50 hover:bg-lightwhiteturquoise cursor-pointer text-dark rounded-xl">
      
      {/* Анимация загрузки, если картинка ещё не загружена */}
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-[143px]">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-turquoise"></div>
        </div>
      ) : (
        <img
          src={image}
          className="w-[255px]"
          alt="Check"
        />
      )}

      <div className="flex flex-col p-2 gap-y-2">
        <p className="line-clamp-2 text-xl mb-2">{title}</p>
        <span className="">{organizer}</span>
        <span className="">{startDate}{endDate !== undefined ? (" - " + endDate) : ("")}</span>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2">
            <div className="flex flex-row gap-1">
              <Star className="w-5" alt="" />
              <span>{rate}</span>
            </div>
            <div className="flex flex-row gap-1">
              <User className="w-5" alt="" />
              <span className="">{participants}</span>
            </div>
          </div>
          <button
            className="bg-transparent p-0 mr-2 hover:border-transparent"
            onClick={(e) => {
              e.stopPropagation(); // Предотвращаем срабатывание клика на карточке
              onButtonClick(); // Вызываем переданную функцию для кнопки
            }}
          >
            {added ? (
              <Remove className="stroke-turquoise"/>
            ) : (
              <Add className="stroke-turquoise"/>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
