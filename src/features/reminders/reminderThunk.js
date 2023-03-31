import { createAsyncThunk } from "@reduxjs/toolkit";

export const reminderThunk = createAsyncThunk("reminder/loadReminders", () => {
  const request = fetch(`https://fakerapi.it/api/v1/books?_quantity=15`)
    .then((rawApiResponse) => {
      return rawApiResponse.json().then((jsonResponse) => {
        let data = [];
        jsonResponse.data.forEach((element) => {
          data.push({
            fav: false,
            ...element,
          });
        });
        return data;
      });
    })
    .catch((error) => {
      throw error;
    });
  return request;
});
