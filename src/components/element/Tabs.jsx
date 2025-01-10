import React, { useEffect, useRef, useState } from "react";

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabsRef = useRef([]);

  useEffect(() => {
    const activeButton = tabsRef.current[activeTab - 1];
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setUnderlineStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeTab]);

  return (
    <div className="relative flex flex-row gap-[30px] mb-6 text-lg w-max border-b-[1px] border-darkturquoise">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          ref={(el) => (tabsRef.current[index] = el)}
          className={`p-0 mb-0.25 bg-transparent border-none ${
            activeTab === tab.id ? "text-darkturquoise" : "text-dark"
          }`}
        >
          {tab.title}
        </button>
      ))}
      {/* Подчеркивание */}
      <div
        className="absolute bottom-0 h-[2px] bg-darkturquoise transition-all duration-300"
        style={underlineStyle}
      ></div>
    </div>
  );
};

export default Tabs;
