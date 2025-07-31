import React, {useState, useEffect } from "react"
import styles from "./SearchPageLayout.module.css";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import MovieItem from "../../molecules/MovieItem/MovieItem";
const SearchPageLayout = ({ children, data }) => {
    const [movies, setMovies] = useState([])
        useEffect(() => {
                setMovies(data);
        },[data])
    return (
        <div className={styles['search-layout']}>
            <div>
                <SearchBar results={movies} setResults={setMovies} />
            </div>
            <div className={styles['movies-list']}>
                {movies.length > 0 ? movies.map((movie, index) => (
                    <MovieItem key={index} movie={movie} />
                )) : (
                    <div className={styles['no-movies']}>
                        <p>No movies available</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default SearchPageLayout;