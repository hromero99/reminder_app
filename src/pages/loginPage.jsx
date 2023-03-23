import {useNavigate} from 'react-router-dom';


export const LoginPage = () => {
    const navigate = useNavigate();

    const formSubmitHandler = (event) =>{
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (username === "admin" && password === "admin"){
            navigate("/");
        }
    }

    return (
        <div className="LoginContainer">
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Username"/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" placeholder="Contraseña"/>
            </form>
            <button onClick={formSubmitHandler}>Login</button>
        </div>
    );
}