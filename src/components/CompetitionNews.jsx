import React from "react";
import { useNavigate } from 'react-router-dom';
import Winner from '/src/assets/icons/Winner.svg'
import Second from '/src/assets/icons/Second.svg'
import Third from '/src/assets/icons/Third.svg'
import CardImage from '/src/assets/imgs/CompetiotionTemplate.png'
import ResultsTable from "/src/components/elements/ResultsTable.jsx";
import { changeTimeView } from "/src/utils/TimeView.js";


const CompetitionNews = ({ competition }) => {

  const navigate = useNavigate();

  const competitionNavigate = (id) => {
    navigate('/competitions/' + id);
  };

  return (
    <div className="bg-lightwhiteturquoise text-dark p-2 rounded-3xl mb-6">
      <div className=" bg-white border-darkturquoise rounded-[20px] p-4">
        <div className="mb-4">
          <h2 
            onClick={() => competitionNavigate(competition.id)} 
            className="text-2xl cursor-pointer hover:text-darkturquoise">
            Результаты "{competition.title}"
          </h2>
          <span>{competition.endDate}</span>
        </div>
        <div className="flex justify-center space-x-4">
          <div className="flex pb-5 pt-8 rounded-full">
            <div className="flex flex-col items-center w-24 mt-3">
              <img src={CardImage} alt="User" className="w-10 h-10 rounded-full" />
              <Second alt="Second" className="absolute mt-7 ml-6 w-6" />
              <span className="truncate max-w-28 mt-2">{competition.solutions[1].username}</span>
            </div>
            <div className="flex flex-col items-center w-24">
              <img src={CardImage} alt="User" className="w-10 h-10 rounded-full" />
              <Winner alt="Winner" className="absolute mt-[-24px] w-6" />
              <span className="truncate max-w-28">{competition.solutions[0].username}</span>
            </div>
            <div className="flex flex-col items-center w-24 mt-6">
              <img src={CardImage} alt="User" className="w-10 h-10 rounded-full" />
              <Third alt="Third" className="absolute mt-7 ml-6 w-6" />
              <span className="truncate max-w-28 mt-2">{competition.solutions[2].username}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-x-auto sm:rounded-lg m-auto max-w-[800px]">
            <ResultsTable
              results={competition.solutions}
              rows={10}
              columns={[
                { key: "place", label: "Место" },
                { key: "username", label: "Пользователь" },
                { key: "time", label: "Время", format: (value) => changeTimeView(value) },
                { key: "score", label: "Оценка" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompetitionNews;
