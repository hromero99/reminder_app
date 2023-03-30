import "./ReminderCard.css";

export const ReminderCard = (props) => {
  return (
    <div className="reminderCard">
      <h1>{props.reminder.name}</h1>
    </div>
  );
};
