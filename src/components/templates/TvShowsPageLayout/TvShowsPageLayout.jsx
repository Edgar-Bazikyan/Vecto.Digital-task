import React, {useEffect, useState} from "react"
import MovieItem from "../../molecules/MovieItem/MovieItem"
import styles from './TvShowsPageLayout.module.css'

const TvShowsPageLayout = ({data}) =>  {
    const [tvShows, setTvShows] = useState([])
    useEffect(() => {
            setTvShows(data.filter(show => show.Category === 'TV Show'));
    },[data])

    return (
        <div className={styles['tv-shows-page']}>
        {tvShows.length > 0 ? tvShows.map((show, index) => (
                        <MovieItem key={index} movie={show} />
                    ) ) : (
                        <div className={styles['no-movies']}>
                            <p>No TV shows available</p>
                        </div>
                    )}
        </div>
    )
}

export default TvShowsPageLayout