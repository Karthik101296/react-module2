import {useContext} from 'react';
import { Link} from 'react-router-dom';
import FavouritesContext from '../../store/favourites-context';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    const favouriteCtx = useContext(FavouritesContext);

    return (
     <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
          <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetup</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New Meetup</Link>
                </li>
                <li>
                    <Link to='/favourites'>
                        My Favourites 
                        <span className={classes.badge}>{favouriteCtx.totalFavourites}</span>
                    </Link>
                </li>
            </ul>
          </nav>
     </header>
    );
}

export default MainNavigation;