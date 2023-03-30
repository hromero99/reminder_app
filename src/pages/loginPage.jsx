import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// Features
import { logIn } from "../features/users/userSlice";
// Componentes
import { TopBar } from "../components/topBar";
import { FooterComponent } from "../components/FooterComponent";
// Estilo
import "./loginPage.css";
export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formSubmitHandler = (event) => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    dispatch(logIn({ name: username, password: password }));
    navigate("/");
  };

  return (
    <>
      <TopBar />
      <div>
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
          />
        </form>
        <button onClick={formSubmitHandler}>Login</button>
      </div>
      <FooterComponent />
    </>
  );
};
