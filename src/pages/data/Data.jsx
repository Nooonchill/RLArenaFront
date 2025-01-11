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
      dateField="createdDate"
      createFormType="createData"
      buttonText="Создать"
      successMessage="Заявка на добавление данных была отправлена. Через некоторе время они появится в списках."
    />
  );
}
