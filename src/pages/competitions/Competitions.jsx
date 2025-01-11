import ListPageLayout from '../../components/list/ListPageLayout.jsx';
import CardImage from '../../assets/imgs/CompetiotionTemplate.png';
import { competitions } from "../../mockdata/competitionData.js";
import { user } from '../../mockdata/userData.js';

export default function Competitions() {
  return (
    <ListPageLayout
      title="Соревнования"
      items={competitions}
      user={user || {}}
      savedItems={user?.saved?.competitions || []}
      createdItems={user?.created?.competitions || []}
      dateField="startDate"
      endDate="endDate"
      createFormType="createCompetition"
      buttonText="Создать"
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
