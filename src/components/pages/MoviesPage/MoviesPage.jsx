import React, {useEffect, useState} from "react"
import MovieItem from "../../molecules/MovieItem/MovieItem";
import styles from './MoviesPage.module.css'
import MoviesPageLayout from "../../templates/MoviePageLayout/MoviePageLayout";
const MoviesPage = ({data}) =>  {
    return (
        <div className={styles['movies-page']}>
            <MoviesPageLayout data={data} />
        </div>
    )
}

export default MoviesPage