import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import DetailPageLayout from "../../components/DetailPageLayout.jsx";
import { guidesDetails } from "../../mockdata/guideData.js";
import CompetitionImage from "../../assets/imgs/CompetiotionTemplate.png";

// Моковые данные
import { user, logged } from '../../mockdata/userData.js';


const Guide = () => {
  const { id } = useParams();
  const guideDetails = guidesDetails.find((item) => item.id === +id);

  const tabs = [{ id: 1, title: "Обзор" }];

  const renderContent = () => (
    <div className="shadow-md rounded-lg">
      <div className="markdown-container p-4">
        <ReactMarkdown>{guideDetails.text}</ReactMarkdown>
      </div>
    </div>
  );

  return (
    <DetailPageLayout
      user={user}
      details={guideDetails}
      tabs={tabs}
      contentRenderer={renderContent}
      image={CompetitionImage}
      creator={guideDetails.creator}
      people={guideDetails.added}
      rate={guideDetails.rate}
      addButtonText="Добавить"
      removeButtonText="Удалить"
    />
  );
};

export default Guide;
