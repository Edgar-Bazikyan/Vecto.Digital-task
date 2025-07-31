import React, {useEffect, useState} from "react"
import MovieItem from "../../molecules/MovieItem/MovieItem";
import styles from './TvShowsPage.module.css'
import TvShowsPageLayout from "../../templates/TvShowsPageLayout/TvShowsPageLayout";

const TvShowsPage = ({data}) =>  {

    return (
        <div className={styles['tv-shows-page']}>
            <TvShowsPageLayout data={data} />
        </div>
    )
}

export default TvShowsPage