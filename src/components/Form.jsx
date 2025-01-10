import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMarkdown from "react-markdown";

const Form = ({ user={}, type, buttonText, successMessage='' }) => {

  const inputStyles = {
    text: `block w-full h-8 p-4 text-base placeholder-darkturquoise bg-lightwhiteturquoise border-turquoise rounded-xl focus:outline-none focus:ring-0 border-2
    dark:bg-dark dark:placeholder-lightwhiteturquoise dark:text-lightwhiteturquoise dark:border-lightwhiteturquoise`,
    email: `block w-full h-8 p-4 text-base placeholder-darkturquoise bg-lightwhiteturquoise border-turquoise rounded-xl focus:outline-none focus:ring-0 border-2
    dark:bg-dark dark:placeholder-lightwhiteturquoise dark:text-lightwhiteturquoise dark:border-lightwhiteturquoise`,
    password: `block  w-full h-8 p-4 text-base placeholder-darkturquoise bg-lightwhiteturquoise border-turquoise rounded-xl focus:outline-none focus:ring-0 border-2
    dark:bg-dark dark:placeholder-lightwhiteturquoise dark:text-lightwhiteturquoise dark:border-lightwhiteturquoise`,
    textarea: `block w-full h-8 p-2 min-h-[150px] text-base placeholder-darkturquoise bg-lightwhiteturquoise border-turquoise rounded-xl focus:outline-none focus:ring-0 border-2
    dark:bg-dark dark:placeholder-lightwhiteturquoise dark:text-lightwhiteturquoise dark:border-lightwhiteturquoise`,
    file: `block  w-full h-8 text-base file:mr-5 file:pt-0.5 file:pb-2 file:px-3 file:border-2 file:border-turquoise file:border-solid file:bg-turquoise file:cursor-pointer file:hover:bg-lightturquoise file:hover:border-lightturquoise placeholder-darkturquoise bg-lightwhiteturquoise focus:outline-none focus:ring-0 border-2 border-turquoise rounded-xl
    dark:file:border-lightwhiteturquoise dark:file:bg-lightwhiteturquoise dark:border-lightwhiteturquoise dark:bg-dark dark:file:text-dark`,
    date: `block max-w-[150px] w-full h-8 pl-2 text-base placeholder-darkturquoise bg-lightwhiteturquoise rounded-xl focus:outline-none focus:ring-0 border-2 border-turquoise
    dark:bg-dark dark:placeholder-lightwhiteturquoise dark:text-lightwhiteturquoise dark:border-lightwhiteturquoise`,
    radio: `block w-full h-8 p-4 text-base placeholder-darkturquoise bg-lightwhiteturquoise border-turquoise rounded-xl focus:outline-none focus:ring-0 border-2
    `,
  };

  const formFields = {
    'createCompetition': [
      { label: "Название", id: "title", type: "text", required: true, placeholder: "" },
      { label: "Описание", id: "description", type: "textarea", required: true, placeholder: "" },
      { label: "Изображение (.png)", id: "image", type: "file", required: true, placeholder: "", accept: ".png" },
      { label: "Данные (.zip)", id: "data", type: "file", required: true, placeholder: "", accept: ".zip" },
      { label: "Дата начала", id: "start_date", type: "date", required: true, placeholder: "" },
      { label: "Дата завершения", id: "end_date", type: "date", required: true, placeholder: "" },
      { label: "Тэги", id: "tags", type: "text", required: false, placeholder: "" },
    ],
    'createData': [
      { label: "Название", id: "title", type: "text", required: true, placeholder: "" },
      { label: "Описание", id: "description", type: "textarea", required: true, placeholder: "" },
      { label: "Изображение (.png)", id: "image", type: "file", required: true, placeholder: "", accept: ".png" },
      { label: "Архив файлов (.zip)", id: "data", type: "file", required: true, placeholder: "", accept: ".zip" },
    ],
    'createGuide': [
      { label: "Название", id: "title", type: "text", required: true, placeholder: "" },
      { label: "Текст", id: "text", type: "textarea", required: true, placeholder: "" },
      { label: "Изображение (.png)", id: "image", type: "file", required: true, placeholder: "", accept: ".png" },
    ],
    'accountSettings': [
      { label: "Имя пользователя", id: "username", type: "text", required: false, placeholder: user.username },
      { label: "Эл. почта", id: "email", type: "email", required: false, placeholder: user.email },
      { label: "Пароль", id: "password", type: "password", required: false, placeholder: "*******" },
    ],
    'profileSettings': [
      { label: "Полное имя", id: "fullName", type: "text", required: false, placeholder: user.fullName },
      { label: "Организация", id: "organization", type: "text", required: false, placeholder: user.organization },
      { label: "Местонахождение", id: "location", type: "text", required: false, placeholder: user.location },
      { label: "Аватар", id: "avatar", type: "file", required: false, placeholder: "", accept: ".png" },
    ],
    'login': [
      {label: "", id: "user", type: "text", required: true, placeholder: "Логин или Эл. почта"},
      {label: "", id: "password", type: "password", required: true, placeholder: "Пароль"},
    ],
    'signup': [
      {label: "", id: "username", type: "text", required: true, placeholder: "Логин"},
      {label: "", id: "email", type: "text", required: true, placeholder: "Эл. почта"},
      {label: "", id: "fullName", type: "text", required: true, placeholder: "Полное имя"},
      {label: "", id: "password", type: "password", required: true, placeholder: "Пароль"},
    ],
    'addSolution': [
      { label: "Решение (.pkl)", id: "solution", type: "file", required: false, placeholder: "", accept: ".pkl" },
    ]
  };

  const [markdownValue, setMarkdownValue] = useState("");
  const [selectedTab, setSelectedTab] = useState("write");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Сброс сообщения об ошибке

    const formData = new FormData(e.target);
    const startDate = formData.get("start_date");
    const endDate = formData.get("end_date");
    const today = new Date().toISOString().split("T")[0];

    if(startDate && endDate) {
      if (startDate === endDate) {
        setError("Дата начала и окончания не должны совпадать.");
        return;
      }
      if (startDate < today || endDate < today) {
        setError("Даты не могут быть раньше сегодняшнего дня.");
        return;
      }
      if (startDate > endDate) {
        setError("Дата завершения не может быть раньше даты начала.");
        return;
      }
    }

    // Логика обработки данных формы
    console.log("Форма отправлена:", Object.fromEntries(formData));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center text-darkturquoise dark:text-lightwhiteturquoise text-lg">
        {successMessage}
      </div>
    );
  }

  return (
    <form
      className="flex flex-col space-y-4 pb-4 h-max max-w-[650px]"
      onSubmit={handleSubmit}
    >
      {formFields[type].map((field) => (
        <div key={field.id} className="flex text-darkturquoise dark:text-lightwhiteturquoise flex-col gap-0.5">
          <label htmlFor={field.id} className="text-lg">
            {field.label}
            {field.required === true && field.label !== '' ? " *" : ""}
          </label>
          {field.type === "textarea" ? (
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
        className="w-full py-2 px-4 bg-darkturquoise dark:bg-lightwhiteturquoise text-white dark:text-dark rounded-lg shadow hover:bg-lightturquoise dark:hover:bg-whiteturquoise hover:border-lightturquoise"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
