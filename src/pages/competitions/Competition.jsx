import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import DetailPageLayout from "../../components/element/DetailPageLayout.jsx";
import { competitionsDetails, userSolutions } from "../../mockdata/competitionData.js";
import CompetitionImage from "../../assets/imgs/CompetiotionTemplate.png";
import { formatDateTime, changeTimeView } from "../../utils/TimeView.js";
import FilesTable from "../../components/element/FilesTable.jsx";
import ResultsTable from "../../components/element/ResultsTable.jsx";
import Form from "../../components/Form.jsx";
import NotFound from '../errors/NotFound.jsx';

// Моковые данные
import { user, logged } from '../../mockdata/userData.js';


const Competition = () => {
  const { id } = useParams();
  const [competition, setCompetition] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const competitionDetails = competitionsDetails.find((item) => item.id === +id);

      if (!competitionDetails) {
        throw new Error('Competition not found');
      }

      setCompetition(competitionDetails);
    } catch (err) {
      setError(true);
    }
  }, [id]);

  if (error || !competition) {
    return <NotFound />;
  }

  const tabs = [
    { id: 1, title: "Обзор" },
    { id: 2, title: "Данные" },
    { id: 3, title: "Решения" },
    ...(user?.saved?.competitions.includes(+id) ? [{ id: 4, title: "Загрузить" }] : []),
  ];

  const renderContent = (activeTab) => {
    switch (activeTab) {
      case 1:
        return (
          <div className="shadow-md rounded-lg">
            <div className="markdown-container p-2">
              <ReactMarkdown>{competition.description}</ReactMarkdown>
            </div>
          </div>
        );
      case 2:
        return <FilesTable details={competition.data} />;
      case 3:
        return (
          <div className="flex flex-col gap-4">
            {logged && userSolutions &&
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
            }
            <div>
              <span>Лучшие решения: </span>
              <ResultsTable
                results={competition.solutions}
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
        return <Form
          type="addSolution"
          isCretionForm={false} 
          buttonText="Отправить" 
          successMessage="Вы успешно загрузили решение. Через некоторое время результаты ототбразятся в таблице."
        />;
      default:
        return null;
    }
  };

  return (
    <DetailPageLayout
      user={user}
      details={competition}
      tabs={tabs}
      contentRenderer={renderContent}
      creator={competition.organizer}
      people={competition.participants}
      rate={competition.rate}
      addButtonText="Участвовать"
      removeButtonText="Отказаться"
    />
  );
};

export default Competition;
