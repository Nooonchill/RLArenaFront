import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import DetailPageLayout from "../../components/element/DetailPageLayout.jsx";
import { dataDetails } from "../../mockdata/dataData.js";
import CompetitionImage from "../../assets/imgs/CompetiotionTemplate.png";
import FilesTable from "../../components/element/FilesTable.jsx";
import NotFound from '../errors/NotFound.jsx';

// Моковые данные
import { user, logged } from '../../mockdata/userData.js';


const Datum = () => {
  const { id } = useParams();
  const [datum, setDatum] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const datumDetails = dataDetails.find((item) => item.id === +id);

      if (!datumDetails) {
        throw new Error('Datum not found');
      }

      setDatum(datumDetails);
    } catch (err) {
      setError(true);
    }
  }, [id]);

  if (error || !datum) {
    return <NotFound />;
  }

  const tabs = [{ id: 1, title: "Обзор" }, { id: 2, title: "Файлы" }];

  const renderContent = (activeTab) => {
    switch (activeTab) {
      case 1:
        return (
          <div className="shadow-md rounded-lg">
            <div className="markdown-container p-4">
              <ReactMarkdown>{datum.description}</ReactMarkdown>
            </div>
          </div>
        );
      case 2:
        return <FilesTable details={datum.files} />;
      default:
        return null;
    }
  };

  return (
    <DetailPageLayout
      user={user}
      details={datum}
      tabs={tabs}
      contentRenderer={renderContent}
      image={CompetitionImage}
      creator={datum.creator}
      people={datum.added}
      rate={datum.rate}
      addButtonText="Добавить"
      removeButtonText="Удалить"
    />
  );
};

export default Datum;
