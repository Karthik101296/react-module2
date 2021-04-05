  
import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../components/meetup/NewMeetupForm"

function NewMeetupsPage(){
    const history = useHistory();
    function addMeetupHander(meetupData){
        fetch(
            'https://react-database-8c6e7-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then(() => {
            history.replace('/');
        });
    }
    return (
    <section>
         <h1>New Meetups Page</h1>
         <NewMeetupForm onAddMeetup={addMeetupHander}/>
    </section>
    );
}
export default NewMeetupsPage;