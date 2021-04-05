import { useState, useEffect } from 'react';
import MeetupList from '../components/meetup/MeetupList';

function AllMeetupsPage() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ loadedMeetups, setLoadedMeetups ] = useState( [] );

  useEffect(() => {
    fetch(
      'https://react-database-8c6e7-default-rtdb.firebaseio.com/meetups.json'
    ).then (Response => {
        return Response.json();
    }).then (data => {
        const meetups = [];

        for (const key in data){
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
         <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups} />
    </section> 
  );
}

export default AllMeetupsPage;