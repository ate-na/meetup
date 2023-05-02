import { useContext } from "react";
import FavoriteContext from "../../store/favorite-context";
import Card from "../ui/Card";
import styles from "./meetingItem.module.css";

const MeetingItem = (props) => {
  const context = useContext(FavoriteContext);

  const isItemFavorite = context.isFavoriteItemHandler(props.id);

  function onClickFavoriteHandler() {
    console.log("hiiii", props.id);
    if (isItemFavorite) {
      context.removeFromFavritesHandler(props.id);
    } else {
      context.addToFavoritesHandler({
        title: props.title,
        address: props.address,
        description: props.description,
        image: props.image,
        id: props.id,
      });
    }
  }

  return (
    <>
      <li style={{ paddingBlock: "20px", listStyle: "none" }}>
        <Card>
          <div className={styles.items}>
            <div className={styles.image}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg"
                alt={props.title}
              />
            </div>
            <p>{props.title}</p>
            <address>{props.address}</address>
            <p>{props.description}</p>
            <button className={styles.button} onClick={onClickFavoriteHandler}>
              {isItemFavorite ? "Remove From Favorite" : "Add To Favorite"}
            </button>
          </div>
        </Card>
      </li>
    </>
  );
};
export default MeetingItem;
