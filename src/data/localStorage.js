// CRUD

export const createReminderInLocalStorage = (reminderObj) => {
  const reminderLocalStorage = localStorage.getItem("reminders");
  if (reminderLocalStorage != null) {
    const reminderLocalStorageObject = JSON.parse(reminderLocalStorage); // {data: []}
    reminderLocalStorageObject.data.push(reminderObj);
    const reminderLocalStorageUpdatedEncoded = JSON.stringify(
      reminderLocalStorageObject
    );
    localStorage.setItem("reminders", reminderLocalStorageUpdatedEncoded);
  }
};
export const readReminderLocalStorage = () => {
  const reminderLocalStorage = localStorage.getItem("reminders");
  if (reminderLocalStorage != null) {
    const reminderLocalStorageObject = JSON.parse(reminderLocalStorage); // {data: []}
    return reminderLocalStorageObject.data;
  }
  return [];
};
export const checkIfExistsReminder = (reminderObj) => {
  let exits = false;
  readReminderLocalStorage().forEach((reminder) => {
    if (reminder != null) {
      if (reminder.title === reminderObj.title) {
        console.log("true");
        exits = true;
      }
    }
  });
  return exits;
};
export const updateReminderLocalStorage = () => {}; // No usamos porque es crear
export const deleteReminderLocalStorage = (reminderObj) => {
  const reminderLocalStorage = localStorage.getItem("reminders");
  console.log(reminderObj);
  if (reminderLocalStorage != null) {
    let reminderLocalStorageObject = JSON.parse(reminderLocalStorage); // {data: []}
    if (checkIfExistsReminder(reminderObj)) {
      console.log(reminderLocalStorageObject.data);
      let index = reminderLocalStorageObject.data.findIndex(reminderObj);
      console.log(index);
      reminderLocalStorageObject = reminderLocalStorageObject.data.splice(
        index,
        1
      );
      console.log(" UPDATA");
      console.log(reminderLocalStorageObject);

      const reminderLocalStorageUpdatedEncoded = JSON.stringify(
        reminderLocalStorageObject
      );
      localStorage.setItem("reminders", reminderLocalStorageUpdatedEncoded);
    }
  }
};
