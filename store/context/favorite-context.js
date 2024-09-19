import { createContext } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

const FavoriteContextProvider = ({ children }) => {
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
};

export default FavoriteContextProvider;
