import { CreateReminderForm } from "../components/CreateReminderForm"
import { TopBar } from "../components/topBar"


export const CreateReminderPage = () =>{
    return <>
        <TopBar />
        <div style={{display: "flex", justifyContent: "center"}}>
            <CreateReminderForm />
        </div>
    </>
}