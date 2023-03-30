import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { HomePage } from "./pages/homePage";
import { CreateReminderPage } from "./pages/createReminder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { Provider } from "react-redux";
import { store } from "./app/store";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create" element={<CreateReminderPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
  TODO:
    1.- Terminar / comprobar si el formulario de reminder crea el objeto en el store de redux.
    2.- Leer los reminders del estado dentro de la pagina de homepage para mostrarlos.
    3.- Crear logica redux para el usuario (que cuando se loguee se cre e en el estado).
    3.1.- Que el usuario, el nombre, este en la barra.
*/
