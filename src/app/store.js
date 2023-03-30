import { configureStore } from "@reduxjs/toolkit";
import reminderReducer from "../features/reminders/remindersSlice";
import { userSlice } from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    reminder: reminderReducer,
    user: userSlice.reducer,
  },
});
