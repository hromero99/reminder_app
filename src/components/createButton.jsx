import { useNavigate } from "react-router-dom";


export const CreateButton = (props) =>{
    const navigator = useNavigate();
    const createButtonClickHandler = (event) =>{
        navigator("/create");
    }

    return (
        <button className={props.className} onClick={createButtonClickHandler}>Agregar recordatorio</button>
    );
}