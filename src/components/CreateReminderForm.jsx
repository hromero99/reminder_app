import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createReminder } from "../features/reminders/remindersSlice";

export const CreateReminderForm = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const createReminderFormSubmitHandler = (event) => {
    event.preventDefault();
    const reminderName = event.target.name.value;
    const reminderObj = { title: reminderName };
    const localStorageReminders = localStorage.getItem("reminders");
    // Es el primer reminder que guardamos dentro del localstorage
    if (localStorageReminders == null) {
      // convertimos a Json un objeto que tendra la siguiente estructura
      /*
        {
          data: [{name: 1}, {name:2}]
        }
      */
      // Donde cada elemento entre {} es un reminder creado por el usuario
      let newReminderObjectInString = JSON.stringify({
        data: [reminderObj],
      });
      localStorage.setItem("reminders", newReminderObjectInString);
    } else {
      // Leemos el localstorage, lo ponemos como objeto con el JSON.parse y actualizamos
      let remindersInLocalStorageJsonFormat = JSON.parse(localStorageReminders);
      remindersInLocalStorageJsonFormat.data.push(reminderObj);
      localStorage.setItem(
        "reminders",
        JSON.stringify(remindersInLocalStorageJsonFormat)
      );
    }
    // Tiene que ser title porque el objeto que devuelve la api es de libros y tiene title no name
    // Luego en el componente de HomePage lo que hacemos es coger el title
    navigator("/");
  };

  return (
    <form method="POST" onSubmit={createReminderFormSubmitHandler}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">Nombre del recordatorio</label>
        <input type="text" id="name" name="name" required="required" />
        <button>Agregar recordatorio</button>
      </div>
    </form>
  );
};
