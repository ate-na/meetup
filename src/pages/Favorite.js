import { useContext } from "react";
import MeetingList from "../component/meeting/MeetingList";
import FavoriteContext from "../store/favorite-context";

const Favorite = () => {
  const favoriteContext = useContext(FavoriteContext);

  return (
    <>
      <section>
        <h1>Favorite</h1>
        <div>
          <MeetingList items={favoriteContext.favorites} />
        </div>
      </section>
    </>
  );
};

export default Favorite;
