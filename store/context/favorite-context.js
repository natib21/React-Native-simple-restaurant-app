import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: () => {},
  removeFavorites: () => {},
});

const FavoriteContextProvider = ({ children }) => {
  const [favoriteMealId, setFavoriteMealId] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealId((cur) => [...cur, id]);
  };
  const removeFavorite = (id) => {
    setFavoriteMealId((favorite) => favorite.filter((meals) => meals !== id));
  };

  const value = {
    ids: favoriteMealId,
    addFavorites: addFavorite,
    removeFavorites: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoriteContextProvider;
