import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalNumberOfFavorites: 0,
  addToFavoritesHandler: (meetup) => {},
  removeFromFavritesHandler: (meetupId) => {},
  isFavoriteItemHandler: (meetupId) => {},
});

export function FavoriteContextProvider(props) {
  const [favorites, setFavorites] = useState([]);
  let context;

  function addToFavoritesHandler(meetup) {
    setFavorites((prevState) => {
      return prevState.concat(meetup);
    });
  }

  function removeFromFavritesHandler(meetupId) {
    setFavorites((prevState) => {
      return prevState.filter((e) => e.id !== meetupId);
    });
  }

  function isFavoriteItemHandler(meetupId) {
    return favorites.some((e) => e.id === meetupId);
  }

  context = {
    favorites: favorites,
    totalNumberOfFavorites: favorites.length,
    addToFavoritesHandler: addToFavoritesHandler,
    removeFromFavritesHandler: removeFromFavritesHandler,
    isFavoriteItemHandler: isFavoriteItemHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;
