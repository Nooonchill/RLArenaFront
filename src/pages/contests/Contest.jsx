import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import DetailPageLayout from "../../components/element/DetailPageLayout.jsx";
import { contestsDetails, userSolutions } from "../../mockdata/contestData.js";
import ContestImage from "../../assets/imgs/CompetiotionTemplate.png";
import { formatDateTime, changeTimeView } from "../../utils/TimeView.js";
import FilesTable from "../../components/element/FilesTable.jsx";
import ResultsTable from "../../components/element/ResultsTable.jsx";
import Form from "../../components/Form.jsx";
import NotFound from '../errors/NotFound.jsx';

// Моковые данные
import { user, logged } from '../../mockdata/userData.js';


const Contest = () => {
  const { id } = useParams();
  const [сontest, setContest] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const contestDetails = contestsDetails.find((item) => item.id === +id);

      if (!contestDetails) {
        throw new Error('Contest not found');
      }

      setContest(contestDetails);
    } catch (err) {
      setError(true);
    }
  }, [id]);

  if (error || !сontest) {
    return <NotFound />;
  }

  const tabs = [
    { id: 1, title: "Обзор" },
    { id: 2, title: "Данные" },
    { id: 3, title: "Решения" },
    ...(user?.saved?.contests.includes(+id) ? [{ id: 4, title: "Загрузить" }] : []),
  ];
  console.log(tabs)

  const renderContent = (activeTab) => {
    switch (activeTab) {
      case 1:
        return (
          <div className="shadow-md rounded-lg">
            <div className="markdown-container p-2">
              <ReactMarkdown>{сontest.description}</ReactMarkdown>
            </div>
          </div>
        );
      case 2:
        return <FilesTable details={сontest.dataset} />;
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
                results={сontest.leaderboard}
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
          successMessage={"Вы успешно отправили решение. В скором времени результат отобразится в таблице."}
          failMessage={"Произошла неизвестная ошибка. Попробуйте еще раз или обратитесь в тех. поддержку"}
          buttonText={"Загрузка"}
          fields={[
            { label: "Решение (.csv)", id: "solution", type: "file", required: false, placeholder: "", accept: ".csv" },
          ]}
        />;
      default:
        return null;
    }
  };

  return (
    <DetailPageLayout
      user={user}
      details={сontest}
      tabs={tabs}
      contentRenderer={renderContent}
      creator={сontest.organizer}
      people={сontest.participants}
      rate={сontest.rate}
      addButtonText="Участвовать"
      removeButtonText="Отказаться"
    />
  );
};

export default Contest;
