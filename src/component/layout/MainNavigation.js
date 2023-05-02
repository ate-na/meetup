import styles from "./layout.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoriteContext from "../../store/favorite-context";


const MainNavigation = () => {
  const context = useContext(FavoriteContext);

  return (
    <>
      <header>
        <nav>
          <ul className={styles.list}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/new-meeting"}>NewMeeting</Link>
            </li>
            <li>
              <Link to={"/favorite"}>
                Favorite     <span className={styles.numberofFavorite}>{context.totalNumberOfFavorites}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default MainNavigation;
