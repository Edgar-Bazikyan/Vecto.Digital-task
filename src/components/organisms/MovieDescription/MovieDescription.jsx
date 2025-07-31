import React from "react"
import styles from "./MovieDescription.module.css";
import Button from "../../atoms/Button/Button";
import { useUser } from "../../../context/Context";
const MovieDescription = ({movie}) => { 
    const { language, btnLanguage } = useUser();
    const timeHandler = (duration) => {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        return `${hours}h ${minutes}m`;
    }
    return(
        <div className={styles['movie-description-container']}>
            <div className={styles['title']}>Movie</div>
            <img src={movie.TitleImage} alt="FeaturedTitleImage" />
            <div className={styles['movie-details']}>
                <div>{movie.ReleaseYear}</div>
                <div>{movie.MpaRating}</div>
                <div>{timeHandler(movie.Duration)}</div>
            </div>
            <div className={styles['movie-description']}>
                {movie.Description[language]}
            </div>
            <div className={styles['buttons']}>
                <Button type="play">{btnLanguage.play[language]}</Button>
                <Button type="more-info">{btnLanguage.moreInfo[language]}</Button>
            </div>
        </div>
    )
}
export default MovieDescription;