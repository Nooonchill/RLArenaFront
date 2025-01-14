import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ResultsTable from "../../components/element/ResultsTable.jsx";
import Achivements from "../../components/userInfo/Achivements.jsx";
import { getUser } from "../../utils/handlers/handlersUser.jsx";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Проверка на наличие пользователя
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser(); // Получаем данные пользователя
      if (userData) {
        setUser(userData); // Если данные получены, сохраняем в состояние
      } else {
        navigate('/'); // Если данных нет, редиректим на главную
      }
    };
    
    fetchUser(); // Вызов асинхронной функции
  }, [navigate]); // Используем пустой массив зависимостей, чтобы эффект сработал только при монтировании компонента

  // Если данные пользователя еще не загружены
  if (!user) {
    return <div>Loading...</div>; // Пока идет загрузка, показываем "Loading..."
  }

  user["achivements"] = [
    { id: 1, title: "Начало пути" },
    { id: 2, title: "Стать сильнее" },
    { id: 3, title: "Гранит науки" },
    { id: 4, title: "Первая победа" },
    { id: 5, title: "Развитие" },
    { id: 6, title: "Шаг вперед" },
    { id: 7, title: "Умник" },
    { id: 8, title: "Перерыв" },
  ];

  user["results"] = [
    { id: 134, title: "Прогнозирование цен на дома", place: 21 },
    { id: 12, title: "Оценка стоимости автомобиля по его характеристикам", place: 24 },
    { id: 35, title: "Обладатель Кубка Гагарина 2025 года", place: 535 },
    { id: 1, title: "Студенты, проходящие стажировки в IT-компаниях", place: 654 },
  ];

  return (
    <div className="h-full max-w-[1110px] mx-auto text-dark dark:text-lightwhiteturquoise mt-4">
      <div className="flex flex-row justify-between">
        <div className="flex gap-7">
          <div className="w-40 h-40 overflow-hidden">
            <img src={user.profile_image} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <h2 className="text-2xl">{user.username}</h2>
              <span className="">{user.company}</span>
              <span>{user.country}</span>
            </div>
            <span>Дата регистрации: {user.date_registered}</span>
          </div>
        </div>
        <span className="max-w-[600px]">{user.biography}</span>
      </div>
      {user.achivements && <Achivements user={user} />}
      <div className="bg-none mt-5 rounded-3xl">
        <h2 className="text-2xl ml-[60px] mb-4">Результаты участия в соренованиях</h2>
        <div className="relative overflow-x-auto sm:rounded-lg m-auto">
          {user.results && <ResultsTable
            results={user.results}
            rows={20}
            columns={[
              { key: "id", label: "#" },
              { key: "title", label: "Название" },
              { key: "place", label: "Позиция" },
            ]}
          />}
        </div>
      </div>
    </div>
  );
}

export default Profile;
