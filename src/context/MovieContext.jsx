import { createContext, useState, useContext, useEffect } from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(
        () => {
            const storedFavs = localStorage.getItem("myMovies")
            try {
                return storedFavs ? JSON.parse(storedFavs) : [];
            } catch (error) {
                return [];
            }
            
        }
    );

    // const [favorites, setFavorites] = useState(() => {
    //     const storedFavs = localStorage.getItem("myMovies");

    //     if (!storedFavs || storedFavs === "undefined") {
    //         return [];
    //     }

    //     try {
    //         return JSON.parse(storedFavs);
    //     } catch {
    //         return [];
    //     }
    // });


    useEffect(() => {

        localStorage.setItem("myMovies", JSON.stringify(favorites))

    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId
        )
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
} 