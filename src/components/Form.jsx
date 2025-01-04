import React, { useState } from "react";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMarkdown from "react-markdown";

const Form = ({ type }) => {
  const inputStyles = {
    text: "block max-w-[650px] w-full h-8 p-4 text-base placeholder-darkturquoise bg-lightwhiteturquoise border-turquoise rounded-xl focus:outline-none focus:ring-0 border-2",
    textarea: "block max-w-[650px] w-full h-8 p-2 min-h-[150px] text-base placeholder-darkturquoise bg-lightwhiteturquoise border-turquoise rounded-xl focus:outline-none focus:ring-0 border-2",
    file: "block max-w-[650px] w-full h-8 text-base file:mr-5 file:pt-0.5 file:pb-2 file:px-3 file:border-2 file:border-turquoise file:border-solid file:bg-turquoise file:cursor-pointer file:hover:bg-lightturquoise file:hover:border-lightturquoise placeholder-darkturquoise bg-lightwhiteturquoise focus:outline-none focus:ring-0 border-2 border-turquoise rounded-xl",
    date: "block max-w-[150px] w-full h-8 pl-2 text-base placeholder-darkturquoise bg-lightwhiteturquoise rounded-xl focus:outline-none focus:ring-0 border-2 border-turquoise",
  };

  const formFields = {
    'competitions': [
      { label: "Название", id: "title", type: "text", required: true },
      { label: "Описание", id: "description", type: "textarea", required: true },
      { label: "Картинка", id: "image", type: "file", required: true },
      { label: "Данные", id: "data", type: "file", required: false },
      { label: "Дата начала", id: "start_date", type: "date", required: true },
      { label: "Дата завершения", id: "end_date", type: "date", required: true },
      { label: "Тэги", id: "tags", type: "text", required: false },
      { label: "Правила", id: "rules", type: "file", required: false },
    ]
  };

  const [markdownValue, setMarkdownValue] = useState("");
  const [selectedTab, setSelectedTab] = useState("write");

  return (
    <form className="space-y-4 pb-4">
      {formFields[type].map((field) => (
        <div key={field.id} className="flex flex-row text-darkturquoise gap-[30px]">
          <label htmlFor={field.id} className="text-lg w-40">
            {field.label}{field.required === true ? " *" : ""}
          </label>
          {field.type === "textarea" && field.id === "description" ? (
            <div className="max-w-[650px] w-full">
              <ReactMde
                value={markdownValue}
                onChange={setMarkdownValue}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                  Promise.resolve(<ReactMarkdown>{markdown}</ReactMarkdown>)
                }
                childProps={{
                  container: { className: "border-0 shadow-none" }, 
                  writeButton: { className: "text-white" },
                  previewButton: { className: "text-white" },
                  textArea: { className: "p-2 w-full bg-lightwhiteturquoise rounded-b-[10px]" },
                  previewContent: { className: "p-2 w-full bg-lightwhiteturquoise rounded-b-[10px]" },
                }}
              />
            </div>
          ) : (
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              required={field.required}
              className={inputStyles[field.type]}
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="max-w-[650px] ml-[190px] w-full py-2 px-4 bg-darkturquoise text-white rounded-lg shadow hover:bg-lightturquoise hover:border-lightturquoise"
      >
        Создать
      </button>
    </form>
  );
};

export default Form;
