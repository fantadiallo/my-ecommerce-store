import { createContext, useState, useEffect } from 'react';

// Create FavoritesContext
export const FavoritesContext = createContext();

// Provide FavoritesContext
export const FavoritesProvider = ({ children }) => {
  // Initialize favorites from localStorage
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Sync favorites with localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Add item to favorites
  const addToFavorites = (item) => {
    setFavorites((prevFavorites) => {
      const exists = prevFavorites.some((fav) => fav.id === item.id);
      if (!exists) {
        return [...prevFavorites, item];
      }
      return prevFavorites;
    });
  };

  // Remove item from favorites
  const removeFromFavorites = (itemId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== itemId)
    );
  };

  // Clear all favorites
  const clearFavorites = () => setFavorites([]);

  // Calculate total favorites
  const favoritesCount = favorites.length;

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        clearFavorites,
        favoritesCount
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
