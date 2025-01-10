import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import DetailPageLayout from "../../components/element/DetailPageLayout.jsx";
import { guidesDetails } from "../../mockdata/guideData.js";
import CompetitionImage from "../../assets/imgs/CompetiotionTemplate.png";
import NotFound from '../errors/NotFound.jsx';

// Моковые данные
import { user, logged } from '../../mockdata/userData.js';


const Guide = () => {
  const { id } = useParams();
  const [guide, setGuide] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const guideDetails = guidesDetails.find((item) => item.id === +id);

      if (!guideDetails) {
        throw new Error('Guide not found');
      }

      setGuide(guideDetails);
    } catch (err) {
      setError(true);
    }
  }, [id]);

  if (error || !guide) {
    return <NotFound />;
  }

  const tabs = [{ id: 1, title: "Обзор" }];

  const renderContent = () => (
    <div className="shadow-md rounded-lg">
      <div className="markdown-container p-4">
        <ReactMarkdown>{guide.text}</ReactMarkdown>
      </div>
    </div>
  );

  return (
    <DetailPageLayout
      user={user}
      details={guide}
      tabs={tabs}
      contentRenderer={renderContent}
      image={CompetitionImage}
      creator={guide.creator}
      people={guide.added}
      rate={guide.rate}
      addButtonText="Добавить"
      removeButtonText="Удалить"
    />
  );
};

export default Guide;
