import { useContext } from 'react';

import FavouritesContext from '../store/favourites-context';
import MeetupList from '../components/meetup/MeetupList';

function FavouritesPage() {
    const favouriteCtx = useContext(FavouritesContext);
    let content;

    if(favouriteCtx.totalFavourites === 0){
        content = <p>You got no Favourites yet. Start Adding Some?</p>
    }else{
        content = <MeetupList meetups={favouriteCtx.favourites} />
    }

    return (
        <section>
            <h1>My Favourites</h1>
            {content}
        </section>
    );
    
}
    
export default FavouritesPage;