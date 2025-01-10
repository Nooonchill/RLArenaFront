import ListPage from '../../components/ListPage.jsx';
import CardImage from '../../assets/imgs/CompetiotionTemplate.png';
import { guides } from "../../mockdata/guideData.js";
import { user } from '../../mockdata/userData';


export default function Guides() {
  return (
    <ListPage 
      title="Гайды"
      items={guides}
      user={user}
      savedItems={user.saved.guides}
      createdItems={user.created.guides}
      cardImage={CardImage}
      dateField="createdDate"
      createFormType="createGuide"
      buttonText="Создать"
    />
  );
}
