import React, {useContext} from "react";
import { FaHeart } from 'react-icons/fa';
import { FavoritesContext } from '../../context/FavoritesContext';
import styles from './FavoritesIcon.module.css';

function FavoritesIcon(){
    const { favorites } = useContext(FavoritesContext);
    const itemCount = favorites.length;

    return(
        <div className={styles.FavoritesIcon}>
            <button
            type="button"
            className={styles.favoritesButton}
            aria-label="View Favorites"
            >
                <FaHeart size={20}/>
                {itemCount > 0 && (
                    <span className={styles.badge}>{itemCount}</span>

                )}
            </button>


        </div>
    )
}
export default FavoritesIcon;

