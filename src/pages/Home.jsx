import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import { searchMovies, getPopularMovies } from '../services/api'

function Home() {
    const [searchQuery, setsearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies() 
    }, []);


    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("failed to search movies...")

        } finally {
            setLoading(false)
        }


    }

    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-name'>
                <input type="text" placeholder="Search for movies..." className='search-movies' value={searchQuery}
                    onChange={(e) => setsearchQuery(e.target.value)} />
                <button type='submit' className='search=btn'>Search</button>
            </form>
            {loading ? (<div className='loading'>Loading...</div>) : (<div className='movie-grid'>
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        )}


        </div>
        // <div>Hello</div>
    )
}

export default Home