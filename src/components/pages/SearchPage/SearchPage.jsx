import React from "react";
import styles from "./SearchPage.module.css";
import SearchPageLayout from "../../templates/SearchPageLayout/SearchPageLayout";

const SearchPage = ({data}) => {
    return (
        <div className={styles["search-page"]}>
            <SearchPageLayout data={data} />
        </div>
    );
};

export default SearchPage;