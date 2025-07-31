import React from 'react'
import styles from './MovieItem.module.css'

const MovieItem = ({ movie, onClick }) => {
    return (
        <div className={styles['movie-item']} onClick={onClick}>
                <img src={movie.CoverImage} alt={movie.Title} className={styles['movie-image']} />
                <h3 className={styles['movie-title']}>{movie.Title}</h3>
        </div>
    )
}
export default MovieItem