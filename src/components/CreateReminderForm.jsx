import { createElement, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createReminder } from "../features/reminders/remindersSlice";
import { createReminderInLocalStorage } from "../data/localStorage";
export const CreateReminderForm = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [itemsInReminderFields, setItemsInReminderFields] = useState([]);
  const createReminderFormSubmitHandler = (event) => {
    event.preventDefault();
    const reminderName = event.target.name.value;
    const inputElements = document.querySelectorAll("input");
    let reminderElements = [];
    inputElements.forEach((input) => {
      if (input.id != "name") {
        reminderElements.push(input.value);
      }
    });
    const reminderObj = {
      title: reminderName,
      elements: reminderElements,
      fav: false,
    };
    dispatch(createReminder(reminderObj));
    createReminderInLocalStorage(reminderObj);
    console.log(reminderElements);
    navigator("/");
  };
  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setItemsInReminderFields((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;
      return newArr;
    });
  };

  const addItemToFormButtonHandler = () => {
    setItemsInReminderFields([
      ...itemsInReminderFields,
      {
        type: "text",
        value: "",
      },
    ]);
  };

  return (
    <>
      <button onClick={addItemToFormButtonHandler}>+</button>
      <form method="POST" onSubmit={createReminderFormSubmitHandler}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="name">Nombre del recordatorio</label>
          <input type="text" id="name" name="name" required="required" />
          {itemsInReminderFields.map((item, i) => {
            return (
              <input
                value={item.value}
                onChange={handleChange}
                id={i}
                type={item.type}
              />
            );
          })}
          <button id="submitButton">Agregar recordatorio</button>
        </div>
      </form>
    </>
  );
};
