import { CreateReminderForm } from "../components/CreateReminderForm";
import { TopBar } from "../components/topBar";
import { FooterComponent } from "../components/FooterComponent";

export const CreateReminderPage = () => {
  return (
    <>
      <TopBar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CreateReminderForm />
      </div>
      <FooterComponent />
    </>
  );
};
