import React from "react"
import styles from "./MainPageLayout.module.css";
import FeaturedImage from "../../organisms/FeaturedImage/FeaturedImage"
import MovieList from "../../organisms/MovieList/MovieList";

const MainPageLayout = ({ children, data, isMenuOpen, setIsMenuOpen }) => {
    return (
        <div className={styles['main-layout']}>
            <FeaturedImage />
            <MovieList movies={data} />
            {children}
        </div>
    )
}
export default MainPageLayout;