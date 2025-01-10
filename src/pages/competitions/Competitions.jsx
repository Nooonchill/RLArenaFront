import ListPage from '../../components/ListPage.jsx';
import CardImage from '../../assets/imgs/CompetiotionTemplate.png';
import { competitions } from "../../mockdata/competitionData.js";
import { user } from '../../mockdata/userData.js';

export default function Competitions() {
  return (
    <ListPage 
      title="Соревнования"
      items={competitions}
      user={user}
      savedItems={user.saved.competitions}
      createdItems={user.created.competitions}
      cardImage={CardImage}
      dateField="startDate"
      endDate="endDate"
      createFormType="createCompetition"
      buttonText="Создать"
      additionalFilters={[
        {value: "Все", title: "Все"},
        {value: "Открытые", title: "Открытые"},
        {value: "Скоро начнутся", title: "Скоро начнутся"},
        {value: "Завершенные", title: "Завершенные"},
      ]}
    />
  );
}
