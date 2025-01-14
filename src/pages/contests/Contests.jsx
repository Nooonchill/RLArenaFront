import ListPageLayout from '../../components/list/ListPageLayout.jsx';
import CardImage from '../../assets/imgs/CompetiotionTemplate.png';
import { contests } from "../../mockdata/contestData.js";
import { user } from '../../mockdata/userData.js';
import { handleCreateContestSubmit } from '../../utils/handlers/handlersSubmit.jsx';

export default function Contests() {
  return (
    <ListPageLayout
      title="Соревнования"
      items={contests}
      user={user || {}}
      savedItems={user?.saved?.contests || []}
      createdItems={user?.created?.contests || []}
      dateField="startDate"
      endDate="endDate"
      formConfig={{
        successMessage: "Заявка на создание соревновния была отправлена. Через некоторе время оно появится в списках.",
        failMessage: "Произошла неизвестная ошибка. Попробуйте еще раз или обратитесь в тех. поддержку",
        buttonText: "Создать",
        fields: 
        [
          { label: "Название", id: "title", type: "text", required: true, placeholder: "" },
          { label: "Краткая информация", id: "shortInfo", type: "textarea", required: true, placeholder: "", markdown: false },
          { label: "Краткое описание", id: "shortDescription", type: "textarea", required: true, placeholder: "", markdown: false },
          { label: "Описание (.md/.txt)", id: "description", type: "file", required: true, placeholder: "", accept: ".md,.txt" },
          { label: "Описание данных", id: "dataDescription", type: "file", required: true, placeholder: "", accept: ".md,.txt" },
          { label: "Тип соревнования", id: "contest_type", type: "text", required: true, placeholder: ""},
          { label: "Расшерение файла ответа", id: "submission_file_type", type: "text", required: false, placeholder: ""},
          { label: "Дата начала", id: "start_date", type: "date", required: true, placeholder: "" },
          { label: "Дата завершения", id: "end_date", type: "date", required: true, placeholder: "" },
          { label: "Изображение (.png/.jpg)", id: "image", type: "file", required: true, placeholder: "", accept: ".png,.jpg" },
          { label: "Лицензия", id: "license", type: "textarea", required: true, placeholder: "" },
          { label: "Метрика", id: "metric", type: "text", required: false, placeholder: ""},
          { label: "Целевая переменная", id: "target", type: "text", required: false, placeholder: ""},
          { label: "RL гитхаб репозиторий", id: "rl_github_repo", type: "text", required: false, placeholder: ""},
          { label: "Открытые данные (.zip)", id: "dataset_public", type: "file", required: true, placeholder: "", accept: ".zip" },
          { label: "Скрытые данные (.zip)", id: "dataset_private", type: "file", required: false, placeholder: "", accept: ".zip" },
          { label: "Награды", id: "rewards", type: "text", required: true, placeholder: "" },
        ],
        handleSubmit: handleCreateContestSubmit,
      }}
      additionalFilters={[
        { value: "Все", title: "Все" },
        { value: "Открытые", title: "Открытые" },
        { value: "Скоро начнутся", title: "Скоро начнутся" },
        { value: "Завершенные", title: "Завершенные" },
      ]}
      successMessage="Заявка на создание соревновния была отправлена. Через некоторе время оно появится в списках."
    />
  );
}
