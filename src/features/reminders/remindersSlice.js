import { act } from "react-dom/test-utils";
import { reminderThunk } from "./reminderThunk";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const reminderSlice = createSlice({
  name: "reminder",
  initialState: {
    error: null,
    status: "idle",
    data: [],
  },
  reducers: {
    createReminder: (state, action) => {
      if (state.data.includes(action.payload) == false) {
        state.data.push(action.payload);
      }
    },
    createMultipleReminders: (state, action) => {
      let content = [];
      action.payload.forEach((reminder) => {
        if (state.data.includes(reminder) == false) {
          content.push(reminder);
        }
      });
      state.data = content;
    },
    deleteReminder: (state, action) => {
      state.data.splice(
        state.data.findIndex((elementos) => elementos == action.payload)
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(reminderThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = state.data.concat(action.payload);
      })
      .addCase(reminderThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(reminderThunk.pending, (state, action) => {
        state.status = "loading";
      });
  },
});

export const getAllReminders = (state) => state.reminder.data;
export const getReminderError = (state) => state.reminder.error;
export const getReminderStatus = (state) => state.reminder.status;

export const { createReminder, createMultipleReminders, deleteReminder } =
  reminderSlice.actions;
export default reminderSlice.reducer;
