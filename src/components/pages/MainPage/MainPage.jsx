import React, {useState} from "react";
import styles from "./MainPage.module.css";
import data from "../../../data.json"
import MainPageLayout from "../../templates/MainPageLayout/MainPageLayout";
const MainPage = () => {

    return (
        <div className={`${styles['main-page']}`}>
            <MainPageLayout data={data['TendingNow']} />
        </div>
    );
};

export default MainPage;
