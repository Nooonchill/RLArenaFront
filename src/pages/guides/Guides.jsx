import ListPageLayout from '../../components/list/ListPageLayout.jsx';
import CardImage from '../../assets/imgs/CompetiotionTemplate.png';
import { guides } from "../../mockdata/guideData.js";
import { user } from '../../mockdata/userData';


export default function Guides() {
  return (
    <ListPageLayout 
      title="Гайды"
      items={guides}
      user={user}
      savedItems={user.saved.guides}
      createdItems={user.created.guides}
      dateField="createdDate"
      createFormType="createGuide"
      buttonText="Создать"
      successMessage="Заявка на добавление гайда была отправлена. Через некоторе время он появится в списках."
    />
  );
}
