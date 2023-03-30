import { createAsyncThunk } from "@reduxjs/toolkit";

export const reminderThunk = createAsyncThunk("reminder/loadReminders", () => {
  const request = fetch("https://fakerapi.it/api/v1/books?_quantity=15")
    .then((rawApiResponse) => {
      return rawApiResponse.json().then((jsonResponse) => {
        return jsonResponse.data;
      });
    })
    .catch((error) => {
      throw error;
    });
  return request;
});
