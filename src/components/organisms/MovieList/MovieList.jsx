import React, { useRef }from "react"
import styles from './MovieList.module.css'
import MovieItem from "../../molecules/MovieItem/MovieItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../../context/Context";

const MovieList = () => {
    const { sortedMovies, visitMovie, language } = useUser();
    const container = useRef(null);
    function scrollRight() {
        const containerElement = container.current;
        if (containerElement) {
            containerElement.scrollBy({
                left:  550,
                behavior: 'smooth'
            });
        }
    }
    function scrollLeft() {
        const containerElement = container.current;
        if (containerElement) {
            containerElement.scrollBy({
                left: -550,
                behavior: 'smooth'
            });
        }
    }
    const lang = {
        arm: 'Թրենդային',
        eng: 'Trending Now'
    }
    return (
        <div>
            <div>
                <h2 className={styles['title']}>{lang[language]}</h2>
            </div>
            <div className={styles['movie-list-container']}>
                <div className={styles['arrow']} onClick={scrollLeft}><FontAwesomeIcon icon={faArrowLeft} /></div>
                <div ref={container} className={styles['movie-list']}>
                    {sortedMovies.length > 0 ? sortedMovies.map((movie, index) => (
                        <MovieItem key={index} movie={movie} onClick={() => visitMovie(movie.Id)} />
                    ) ) : (
                        <div className={styles['no-movies']}>
                            <p>No movies available</p>
                        </div>
                    )}

                </div>
                <div className={styles['arrow']}  onClick={scrollRight}><FontAwesomeIcon icon={faArrowRight} /></div>
            </div>
        </div>
    )
}
export default MovieList