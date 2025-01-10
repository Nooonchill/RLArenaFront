import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import DetailPageLayout from "../../components/DetailPageLayout.jsx";
import { dataDetails } from "../../mockdata/dataData.js";
import CompetitionImage from "../../assets/imgs/CompetiotionTemplate.png";
import FilesTable from "../../components/elements/FilesTable.jsx";

// Моковые данные
import { user, logged } from '../../mockdata/userData.js';


const Datum = () => {
  const { id } = useParams();
  const datumDetails = dataDetails.find((item) => item.id === +id);

  const tabs = [{ id: 1, title: "Обзор" }, { id: 2, title: "Файлы" }];

  const renderContent = (activeTab) => {
    switch (activeTab) {
      case 1:
        return (
          <div className="shadow-md rounded-lg">
            <div className="markdown-container p-4">
              <ReactMarkdown>{datumDetails.description}</ReactMarkdown>
            </div>
          </div>
        );
      case 2:
        return <FilesTable details={datumDetails.files} />;
      default:
        return null;
    }
  };

  return (
    <DetailPageLayout
      user={user}
      details={datumDetails}
      tabs={tabs}
      contentRenderer={renderContent}
      image={CompetitionImage}
      creator={datumDetails.creator}
      people={datumDetails.added}
      rate={datumDetails.rate}
      addButtonText="Добавить"
      removeButtonText="Удалить"
    />
  );
};

export default Datum;
