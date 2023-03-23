
export const CreateReminderForm = () =>{

    const createReminderFormSubmitHandler = (event) =>{
        event.preventDefault();
        const reminderName = event.target.name.value;
    }

    return (
        <form method="POST" onSubmit={createReminderFormSubmitHandler}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <label htmlFor="name">Nombre del recordatorio</label>
                <input type="text" id="name" name="name" required="required"/>
                <button>Agregar recordatorio</button>
            </div>

        </form>
    );
}