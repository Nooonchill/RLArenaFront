import ListPageLayout from '../../components/list/ListPageLayout.jsx';
import CardImage from '../../assets/imgs/CompetiotionTemplate.png';
import { data } from "../../mockdata/dataData.js";
import { user } from '../../mockdata/userData.js';

export default function Data() {
  return (
    <ListPageLayout
      title="Данные"
      items={data}
      user={user || {}}
      savedItems={user?.saved?.data || []}
      createdItems={user?.created?.data || []}
      formConfig = {{
        successMessage:"Заявка на добавление данных была отправлена. Через некоторе время они появится в списках.",
        failMessage: "Произошла неизвестная ошибка. Попробуйте еще раз или обратитесь в тех. поддержку",
        buttonText:"Создать",
        fields: [
          { label: "Название", id: "title", type: "text", required: true, placeholder: "" },
          { label: "Описание", id: "description", type: "textarea", required: true, placeholder: "", markdown: true },
          { label: "Изображение (.png)", id: "image", type: "file", required: true, placeholder: "", accept: ".png" },
          { label: "Архив файлов (.zip)", id: "data", type: "file", required: true, placeholder: "", accept: ".zip" },
        ],
      }}
      createFormType="createData"
      />
  );
}
