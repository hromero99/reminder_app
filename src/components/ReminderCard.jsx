import { useDispatch } from "react-redux";
import { toggleReminderAsFav } from "../features/reminders/remindersSlice";
import {
  createReminderInLocalStorage,
  readReminderLocalStorage,
  deleteReminderLocalStorage,
  checkIfExistsReminder,
} from "../data/localStorage";

import "./ReminderCard.css";

export const ReminderCard = (props) => {
  const dispatch = useDispatch();
  let cardClass = "reminderCard";

  const favButtonClickHandler = () => {
    dispatch(toggleReminderAsFav(props.reminder));
    let reminderTogleValue = !props.reminder.fav;
    if (reminderTogleValue) {
      cardClass = "reminderFavCard";
      console.log("FAV");
      console.log(props.reminder);
      createReminderInLocalStorage(props.reminder);
    } else {
      cardClass = "reminderCard";
      deleteReminderLocalStorage(props.reminder);
    }
  };

  if (props.reminder.fav) {
    cardClass = "reminderFavCard";
  }

  return (
    <div className={cardClass}>
      <h1>{props.reminder.title}</h1>
      <button onClick={favButtonClickHandler}>Fav</button>
    </div>
  );
};
