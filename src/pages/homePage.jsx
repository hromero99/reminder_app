import {TopBar} from '../components/topBar';
import {CreateButton} from '../components/createButton';
import './home.css';
import { ReminderCard } from '../components/ReminderCard';

export const HomePage = () =>{
    return (<>
        <TopBar/>
        <CreateButton className="createButton"/>
        <section className='reminderCardCollection'>
            <ReminderCard reminder={{name:"reminder 1"}} />
            <ReminderCard reminder={{name:"reminder 2"}} />
            <ReminderCard reminder={{name:"reminder 3"}} />
            <ReminderCard reminder={{name:"reminder 4"}} />
        </section>   
    </>);
}