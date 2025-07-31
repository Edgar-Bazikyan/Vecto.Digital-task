import React, {useEffect, useState} from "react"
import MovieItem from "../../molecules/MovieItem/MovieItem";
import styles from './MoviePageLayout.module.css'

const MoviesPageLayout = ({data}) =>  {
    const [movies, setMovies] = useState([])
    useEffect(() => {
            setMovies(data.filter(movie => movie.Category === 'Movie'));
    },[data])

    return (
        <div className={styles['movies-layout']}>
        {movies.length > 0 ? movies.map((movie, index) => (
                        <MovieItem key={index} movie={movie} />
                    ) ) : (
                        <div className={styles['no-movies']}>
                            <p>No movies available</p>
                        </div>
                    )}
        </div>
    )
}

export default MoviesPageLayout