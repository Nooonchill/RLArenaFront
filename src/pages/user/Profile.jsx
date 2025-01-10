import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import CardImage from '../../assets/imgs/CompetiotionTemplate.png'
import ResultsTable from "../../components/element/ResultsTable.jsx";
import Achivements from "../../components/userInfo/Achivements.jsx";

// Моковые данные
import { user, logged } from '../../mockdata/userData.js';


function Profile() {
  
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(logged);

  useEffect(() => {
    if (!isLogged) {
      navigate('/'); 
    }
  }, [isLogged, navigate]);

  const scrollRef = useRef(null);
  
  return (
    <div className="h-full max-w-[1110px] mx-auto text-dark">
      <div className="flex flex-row justify-between">
        <div className="flex gap-7">
          <img src={CardImage} alt="Logo" className="w-40 h-40" />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <h2 className="text-2xl mb-4">{user.username}</h2>
              <span className="mb-3">{user.organization}</span>
              <span>{user.location}</span>
            </div>
            <span>Дата регистрации: {user.registration_date}</span>
          </div>
        </div>
        <span className="max-w-[600px]">{user.biography}</span>
      </div>
      <Achivements user={user}/>
      <div className="bg-none  mt-5  rounded-3xl">
        <h2 className="text-2xl ml-[60px] mb-4">Результаты участия в соренованиях</h2>
        <div className="relative overflow-x-auto sm:rounded-lg m-auto">
          <ResultsTable
            results={user.results}
            rows={20}
            columns={[
              { key: "id", label: "#" },
              { key: "title", label: "Название" },
              { key: "place", label: "Позиция" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
