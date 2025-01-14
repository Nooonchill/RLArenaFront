import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMarkdown from "react-markdown";

const Form = ({ user = {}, fields, successMessage, buttonText, navigatePath = '', apiEndpoint, handleSubmit }) => {

  const inputStyles = {
    text: `block w-full h-8 p-4 text-base placeholder-darkturquoise bg-lightwhiteturquoise border-turquoise rounded-xl focus:outline-none focus:ring-0 border-2
    dark:bg-dark dark:placeholder-lightwhiteturquoise dark:text-lightwhiteturquoise dark:border-lightwhiteturquoise`,
    email: `block w-full h-8 p-4 text-base placeholder-darkturquoise bg-lightwhiteturquoise border-turquoise rounded-xl focus:outline-none focus:ring-0 border-2
    dark:bg-dark dark:placeholder-lightwhiteturquoise dark:text-lightwhiteturquoise dark:border-lightwhiteturquoise`,
    password: `block  w-full h-8 p-4 text-base placeholder-darkturquoise bg-lightwhiteturquoise border-turquoise rounded-xl focus:outline-none focus:ring-0 border-2
    dark:bg-dark dark:placeholder-lightwhiteturquoise dark:text-lightwhiteturquoise dark:border-lightwhiteturquoise`,
    textarea: `block w-full h-8 p-2 min-h-[150px] text-base placeholder-darkturquoise bg-lightwhiteturquoise border-turquoise rounded-xl focus:outline-none focus:ring-0 border-2
    dark:bg-dark dark:placeholder-lightwhiteturquoise dark:text-lightwhiteturquoise dark:border-lightwhiteturquoise`,
    file: `cursor-pointer block  w-full h-8 text-base file:mr-5 file:pt-0.5 file:pb-2 file:px-3 file:border-2 file:border-turquoise file:border-solid file:bg-turquoise file:cursor-pointer file:hover:bg-lightturquoise file:hover:border-lightturquoise placeholder-darkturquoise bg-lightwhiteturquoise focus:outline-none focus:ring-0 border-2 border-turquoise rounded-xl
    dark:file:border-lightwhiteturquoise dark:file:bg-lightwhiteturquoise dark:border-lightwhiteturquoise dark:bg-dark dark:file:text-dark`,
    date: `block max-w-[150px] w-full h-8 pl-2 text-base placeholder-darkturquoise bg-lightwhiteturquoise rounded-xl focus:outline-none focus:ring-0 border-2 border-turquoise
    dark:bg-dark dark:placeholder-lightwhiteturquoise dark:text-lightwhiteturquoise dark:border-lightwhiteturquoise`,
    radio: `block w-full h-8 p-4 text-base placeholder-darkturquoise bg-lightwhiteturquoise border-turquoise rounded-xl focus:outline-none focus:ring-0 border-2
    `,
  };

  const [markdownValue, setMarkdownValue] = useState("");
  const [selectedTab, setSelectedTab] = useState("write");
  const navigate = useNavigate();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  if (isSubmitted) {
    return (
      <div className="text-center text-darkturquoise dark:text-lightwhiteturquoise text-lg">
        {successMessage || "Данные успешно отправлены!"}
        {navigatePath && navigate(navigatePath)}
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4 pb-4 h-max max-w-[650px]"
      onSubmit={(e) => handleSubmit(e, setError, setIsSubmitted)}
    >
      {fields.map((field) => (
        <div key={field.id} className="flex text-darkturquoise dark:text-lightwhiteturquoise flex-col gap-0.5">
          <label htmlFor={field.id} className="text-lg">
            {field.label}
            {field.required === true && field.label !== '' ? " *" : ""}
          </label>
          {field.type === "textarea" & field.markdown ? (
            <div className="max-w-[650px] w-full text-dark dark:text-lightwhiteturquoise">
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
                  writeButton: { className: "text-white text-lg p-1 px-2" },
                  previewButton: { className: "text-white text-lg p-1 px-2" },
                  textArea: { className: "p-2 w-full bg-lightwhiteturquoise dark:bg-dark rounded-b-[10px]" },
                  previewContent: { className: "p-2 w-full bg-lightwhiteturquoise dark:bg-dark rounded-b-[10px]" },
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
              placeholder={field.placeholder}
              accept={field.type === "file" ? field.accept : undefined}
            />
          )}
        </div>
      ))}
      {error && (
        <div className="text-red-500 text-sm">
          {error}
        </div>
      )}
      <button
        type="submit"
        className="mt-4 w-full py-2 px-4 bg-darkturquoise dark:bg-lightwhiteturquoise text-white dark:text-dark rounded-lg shadow hover:bg-lightturquoise dark:hover:bg-whiteturquoise hover:border-lightturquoise"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
