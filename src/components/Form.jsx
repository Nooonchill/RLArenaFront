import React, { useState } from "react";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMarkdown from "react-markdown";

const Form = ({ type, isCretionForm=false, buttonText }) => {

  const user = {
    username: "NoooN",
    fullName: "Горский Иван Артёмович",
    email: "nooonchill@gmail.com",
    organization: "УрФУ",
    registration_date: "5-01-2025",
    location: "Екатеринбург, Россия",
    saved: {
      competitions: [24],
      guides: [201, 205, 203],
      data: [101, 103, 104],
    },
    created: {
      competitions: [1],
      guides: [],
      data: [],
    }
  }

  const inputStyles = {
    text: "block w-full h-8 p-4 text-base placeholder-darkturquoise bg-lightwhiteturquoise border-turquoise rounded-xl focus:outline-none focus:ring-0 border-2",
    password: "block  w-full h-8 p-4 text-base placeholder-darkturquoise bg-lightwhiteturquoise border-turquoise rounded-xl focus:outline-none focus:ring-0 border-2",
    textarea: "block w-full h-8 p-2 min-h-[150px] text-base placeholder-darkturquoise bg-lightwhiteturquoise border-turquoise rounded-xl focus:outline-none focus:ring-0 border-2",
    file: "block  w-full h-8 text-base file:mr-5 file:pt-0.5 file:pb-2 file:px-3 file:border-2 file:border-turquoise file:border-solid file:bg-turquoise file:cursor-pointer file:hover:bg-lightturquoise file:hover:border-lightturquoise placeholder-darkturquoise bg-lightwhiteturquoise focus:outline-none focus:ring-0 border-2 border-turquoise rounded-xl",
    date: "block max-w-[150px] w-full h-8 pl-2 text-base placeholder-darkturquoise bg-lightwhiteturquoise rounded-xl focus:outline-none focus:ring-0 border-2 border-turquoise",
    radio: "block w-full h-8 p-4 text-base placeholder-darkturquoise bg-lightwhiteturquoise border-turquoise rounded-xl focus:outline-none focus:ring-0 border-2",
  };

  const formFields = {
    'competitions': [
      { label: "Название", id: "title", type: "text", required: true, placeholder: "" },
      { label: "Описание", id: "description", type: "textarea", required: true, placeholder: "" },
      { label: "Картинка", id: "image", type: "file", required: true, placeholder: "" },
      { label: "Данные", id: "data", type: "file", required: false, placeholder: "" },
      { label: "Дата начала", id: "start_date", type: "date", required: true, placeholder: "" },
      { label: "Дата завершения", id: "end_date", type: "date", required: true, placeholder: "" },
      { label: "Тэги", id: "tags", type: "text", required: false, placeholder: "" },
      { label: "Правила", id: "rules", type: "file", required: false, placeholder: "" },
    ],
    'accountSettings': [
      { label: "Имя пользователя", id: "username", type: "text", required: false, placeholder: user.username },
      { label: "Эл. почта", id: "email", type: "text", required: false, placeholder: user.email },
      { label: "Пароль", id: "password", type: "password", required: false, placeholder: "*******" },
    ],
    'profileSettings': [
      { label: "Полное имя", id: "fullName", type: "text", required: false, placeholder: user.fullName },
      { label: "Организация", id: "organization", type: "text", required: false, placeholder: user.organization },
      { label: "Местонахождение", id: "location", type: "text", required: false, placeholder: user.location },
    ],
    'generalSettings': [
      {label: "Тема", id: "theme", type: "checkbox", required: false, placeholder: false},
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
    ]
  };

  const [markdownValue, setMarkdownValue] = useState("");
  const [selectedTab, setSelectedTab] = useState("write");

  return (
    <form className={`flex flex-col space-y-4 pb-4 h-max max-w-[650px]`}>
      {formFields[type].map((field) => (
        <div key={field.id} className={`flex text-darkturquoise flex-col gap-0.5`}>
          <label htmlFor={field.id} className={`text-lg ${isCretionForm ? 'w-40' : ''}`}>
            {field.label}{field.required === true && field.label !== '' ? " *" : ""}
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
          ) : field.type === "checkbox" ? (
            <label class="relative inline-flex cursor-pointer items-center">
              <input 
                type={field.type}
                id={field.id}
                name={field.id}
                required={field.required}
                placeholder={field.placeholder} 
                class="peer sr-only" 
              />
              <div class="peer h-[26px] w-[48px] rounded-full border bg-whiteturquoise relative after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-darkturquoise peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
            </label>
          ) : (
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              required={field.required}
              className={inputStyles[field.type]}
              placeholder={field.placeholder}
            />
          )}

        </div>
      ))}
      <button
        type="submit"
        className={`w-full py-2 px-4 bg-darkturquoise text-white rounded-lg shadow hover:bg-lightturquoise hover:border-lightturquoise`}
      >
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
