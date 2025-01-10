import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import DetailPageLayout from "../../components/DetailPageLayout.jsx";
import { competitionsDetails, userSolutions } from "../../mockdata/competitionData.js";
import CompetitionImage from "../../assets/imgs/CompetiotionTemplate.png";
import { formatDateTime, changeTimeView } from "../../utils/TimeView.js";
import FilesTable from "../../components/elements/FilesTable.jsx";
import ResultsTable from "../../components/elements/ResultsTable.jsx";
import Form from "../../components/Form.jsx";

// Моковые данные
import { user, logged } from '../../mockdata/userData.js';


const Competition = () => {
  const { id } = useParams();
  const competitionDetails = competitionsDetails.find((item) => item.id === +id);

  const tabs = [
    { id: 1, title: "Обзор" },
    { id: 2, title: "Данные" },
    { id: 3, title: "Решения" },
    { id: 4, title: "Загрузить" },
  ];

  const renderContent = (activeTab) => {
    switch (activeTab) {
      case 1:
        return (
          <div className="shadow-md rounded-lg">
            <div className="markdown-container p-4">
              <ReactMarkdown>{competitionDetails.description}</ReactMarkdown>
            </div>
          </div>
        );
      case 2:
        return <FilesTable details={competitionDetails.data} />;
      case 3:
        return (
          <div className="flex flex-col gap-4">
            <div>
              <span>Ваши решения: </span>
              <ResultsTable
                results={userSolutions}
                rows={20}
                columns={[
                  { key: "place", label: "Место" },
                  { key: "datetime", label: "Время", format: formatDateTime },
                  { key: "title", label: "Решение" },
                  { key: "score", label: "Оценка" },
                ]}
              />
            </div>
            <div>
              <span>Лучшие решения: </span>
              <ResultsTable
                results={competitionDetails.solutions}
                rows={20}
                columns={[
                  { key: "place", label: "Место" },
                  { key: "username", label: "Пользователь" },
                  { key: "time", label: "Время", format: changeTimeView },
                  { key: "score", label: "Оценка" },
                ]}
              />
            </div>
            
          </div>
        );
      case 4:
        return <Form type="addSolution" isCretionForm={false} buttonText="Отправить" />;
      default:
        return null;
    }
  };

  return (
    <DetailPageLayout
      user={user}
      details={competitionDetails}
      tabs={tabs}
      contentRenderer={renderContent}
      image={CompetitionImage}
      creator={competitionDetails.organizer}
      people={competitionDetails.participants}
      rate={competitionDetails.rate}
      addButtonText="Участвовать"
      removeButtonText="Отказаться"
    />
  );
};

export default Competition;
