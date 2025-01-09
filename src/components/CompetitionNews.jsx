import React from "react";
import Winner from '/src/assets/icons/Winner.svg'
import Second from '/src/assets/icons/Second.svg'
import Third from '/src/assets/icons/Third.svg'
import CardImage from '/src/assets/imgs/CompetiotionTemplate.png'
import ResultsTable from "/src/components/elements/ResultsTable.jsx";


const CompetitionNews = ({ competition }) => {

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
              <Second alt="Second" className="absolute mt-6 ml-6 w-6" />
              <span className="truncate max-w-28">{competition.solutions[1].username}</span>
            </div>
            <div className="flex flex-col items-center w-24">
              <img src={CardImage} alt="User" className="w-10 h-10 rounded-full" />
              <Winner alt="Winner" className="absolute mt-[-24px] w-6" />
              <span className="truncate max-w-28">{competition.solutions[0].username}</span>
            </div>
            <div className="flex flex-col items-center w-24 mt-6">
              <img src={CardImage} alt="User" className="w-10 h-10 rounded-full" />
              <Third alt="Third" className="absolute mt-6 ml-6 w-6" />
              <span className="truncate max-w-28">{competition.solutions[2].username}</span>
            </div>
          </div>
        </div>
        <div>
          <ResultsTable
            results={competition.solutions}
            rows={10}
          />
        </div>
      </div>
    </div>
  );
}

export default CompetitionNews;
