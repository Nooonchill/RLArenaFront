import React, { useState, useEffect, useRef } from "react";
import Tabs from "./Tabs.jsx";
import RightInfo from "./RightInfo.jsx";
import MainInfo from "./MainInfo.jsx";

const DetailPageLayout = ({
  user,
  details,
  tabs,
  contentRenderer,
  image,
  creator,
  people,
  rate,
  addButtonText,
  removeButtonText,
  hideRightInfoInitial = false,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || 1);
  const [hideRightInfo, setHideRightInfo] = useState(hideRightInfoInitial);
  const [lockRightInfo, setLockRightInfo] = useState(false);
  const leftRef = useRef();

  const handleAddSolutionClick = () => {
    setActiveTab(4);
  }

  useEffect(() => {
    const handleResize = () => {
      if (leftRef.current) {
        const leftWidth = leftRef.current.offsetWidth;
        const minLeftWidth = 400;

        if (leftWidth <= minLeftWidth && !lockRightInfo) {
          setHideRightInfo(true);
          setLockRightInfo(true);
        } else if (leftWidth > minLeftWidth + 250) {
          setLockRightInfo(false);
          setHideRightInfo(false);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [lockRightInfo]);

  return (
    <div className="max-w-[1110px] mx-auto">
      <div className="flex flex-row gap-20 justify-between pl-2 text-dark dark:text-lightwhiteturquoise">
        <div ref={leftRef} className="mb-8 flex-grow flex-shrink max-w-[750px]">
          <MainInfo
            user={user}
            details={details}
            addButtonText={addButtonText}
            removeButtonText={removeButtonText}
            addSolutionButtonClick={handleAddSolutionClick}
          />
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          {contentRenderer(activeTab)}
        </div>
        {!hideRightInfo && (
          <RightInfo image={image} creator={creator} people={people} rate={rate} />
        )}
      </div>
    </div>
  );
};

export default DetailPageLayout;
