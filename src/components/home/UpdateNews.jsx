import React from "react";


const UpdateNews = ({ news }) => {
  return (
    <div className="bg-lightwhiteturquoise dark:bg-lightwhiteturquoise text-dark dark:text-lightwhiteturquoise p-2 rounded-3xl shadow-md">
      <div className=" bg-white dark:bg-dark border-darkturquoise rounded-[20px] p-4">
        <div className="mb-4">
          <h2 className="text-2xl">{news.title}</h2>
          <span>{news.date}</span>
        </div>
        <span>{news.text}</span>
      </div>
    </div>
  );
}

export default UpdateNews;
