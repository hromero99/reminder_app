import {
  createReminderInLocalStorage,
  readReminderLocalStorage,
  deleteReminderLocalStorage,
  checkIfExistsReminder,
} from "../data/localStorage";

import "./ReminderCard.css";

export const ReminderCard = (props) => {
  const favButtonClickHandler = () => {
    console.log("BUTTON FAV");
    if (checkIfExistsReminder(props.reminder)) {
      console.log("DELETEEEE");
      deleteReminderLocalStorage(props.reminder);
    } else {
      createReminderInLocalStorage();
    }
  };
  return (
    <div className="reminderCard">
      <h1>{props.reminder.title}</h1>
      <button onClick={favButtonClickHandler}>Fav</button>
    </div>
  );
};
