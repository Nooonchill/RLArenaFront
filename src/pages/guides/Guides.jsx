import ListPageLayout from '../../components/list/ListPageLayout.jsx';
import CardImage from '../../assets/imgs/CompetiotionTemplate.png';
import { guides } from "../../mockdata/guideData.js";
import { user } from '../../mockdata/userData';


export default function Guides() {
  return (
    <ListPageLayout 
      title="Гайды"
      items={guides}
      user={user || {}}
      savedItems={user?.saved?.guides || []}
      createdItems={user?.created?.guides || []}
      dateField="createdDate"
      formConfig = {{
        successMessage:"Заявка на добавление данных была отправлена. Через некоторе время они появится в списках.",
        failMessage: "Произошла неизвестная ошибка. Попробуйте еще раз или обратитесь в тех. поддержку",
        buttonText:"Создать",
        fields: [
          { label: "Название", id: "title", type: "text", required: true, placeholder: "" },
          { label: "Текст", id: "text", type: "textarea", required: true, placeholder: "", markdown: true },
          { label: "Изображение (.png)", id: "image", type: "file", required: true, placeholder: "", accept: ".png" },
        ],
      }}
    />
  );
}
