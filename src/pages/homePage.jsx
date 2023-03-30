import { TopBar } from "../components/topBar";
import { CreateButton } from "../components/createButton";
import "./home.css";
import { ReminderCard } from "../components/ReminderCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createMultipleReminders,
  getAllReminders,
  getReminderError,
  getReminderStatus,
} from "../features/reminders/remindersSlice";
import { reminderThunk } from "../features/reminders/reminderThunk";
import { FooterComponent } from "../components/FooterComponent";
export const HomePage = () => {
  const dispatch = useDispatch();
  const reminderData = useSelector(getAllReminders);
  const reminderStatus = useSelector(getReminderStatus);
  const reminderError = useSelector(getReminderError);

  // Para que se ejecute antes de que se
  // renderice el componente y lo redirija solo
  useEffect(() => {
    if (reminderStatus === "idle") {
      const reminderLocalStorageList = localStorage.getItem("reminders");
      if (reminderLocalStorageList != null) {
        let decodedReminder = JSON.parse(reminderLocalStorageList);
        dispatch(createMultipleReminders(decodedReminder.data));
      }
      dispatch(reminderThunk());
    }
  }, [reminderStatus, dispatch]);

  let content;

  if (reminderStatus === "loading") {
    content = "Loading";
  } else if (reminderStatus === "fulfilled") {
    if (reminderData !== undefined) {
      content = [];
      reminderData.forEach((reminder) => {
        const reminderIndividualData = { name: reminder.title };
        content.push(
          <>
            <ReminderCard reminder={reminderIndividualData} />
          </>
        );
      });
    }
  } else {
    content = reminderError;
  }
  return (
    <>
      <TopBar />
      <CreateButton className="createButton" />
      <section className="reminderCardCollection">{content}</section>
      <FooterComponent />
    </>
  );
};
