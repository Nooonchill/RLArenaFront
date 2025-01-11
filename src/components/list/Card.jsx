import React, { useState, useEffect } from "react";
import Star from '../../assets/icons/Star.svg';
import User from '../../assets/icons/User.svg';
import Add from '../../assets/icons/Add.svg';
import Remove from '../../assets/icons/Remove.svg';
import { saveElement } from "../../utils/SavedElements.js";

const Card = ({ id, title, organizer, participants, rate, imageSrc, startDate, endDate, onClick, added, userId }) => {
  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки картинки
  const [isAdded, setIsAdded] = useState(added);
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
    checkImageLoaded(imageSrc); // Вызываем проверку при изменении src изображения
  }, [imageSrc]);

  return (
    <div onClick={onClick} className="min-w-[136px] max-w-[255px] w-full bg-gray-50 dark:bg-dark hover:bg-lightwhiteturquoise dark:hover:bg-gray-800 cursor-pointer text-dark dark:text-lightwhiteturquoise rounded-xl">

      {/* Анимация загрузки, если картинка ещё не загружена */}
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-[143px]">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-turquoise"></div>
        </div>
      ) : (
        <img
          src={imageSrc}
          className="w-[256px] h-[144px] rounded-t-xl"
          alt="Картинка карточки"
        />
      )}

      <div className="flex flex-col p-2 gap-y-2">
        <p className="line-clamp-2 text-xl mb-2">{title}</p>
        <span className="">{organizer}</span>
        <span className="">{startDate}{endDate !== undefined ? (" - " + endDate) : ("")}</span>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2">
            <div className="flex flex-row gap-1">
              <Star className="w-5" alt="Оценка" />
              <span>{rate}</span>
            </div>
            <div className="flex flex-row gap-1">
              <User className="w-5" alt="Пользователи" />
              <span className="">{participants}</span>
            </div>
          </div>
          {userId &&
            <button
              className="bg-transparent p-0 mr-2 hover:border-transparent"
              onClick={(e) => {
                e.stopPropagation(); // Предотвращаем срабатывание клика на карточке
                setIsAdded(!isAdded);
                saveElement({
                  userId: userId,
                  add: !isAdded,
                  type: location.pathname.match(/\/([^\/]+)/)[1],
                  id: id,
                });
              }}
            >
              <div className="mr-5 mb-6">
                <Remove
                  className={`absolute transition-opacity duration-200 stroke-turquoise ${isAdded ? "opacity-100" : "opacity-0"}`}
                  alt="Удалить"
                />
                <Add
                  className={`absolute transition-opacity duration-200 stroke-turquoise ${isAdded ? "opacity-0" : "opacity-100"
                    }`}
                  alt="Добавить"
                />
              </div>
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default Card;