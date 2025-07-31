import React, {useState} from "react"
import styles from "./SearchBar.module.css";
import data from "../../../data.json"
import { useUser } from "../../../context/Context";
const SearchBar = ({setResults}) => {
    const {language} = useUser()
    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        const results = data['TendingNow'].filter(movie => 
        movie.Title.toLowerCase().includes(query)
        );
       setResults(results); 
    };
    const lang = {
        arm : 'Որոնել',
        eng : 'Search'
    }
    return (
        <div className={styles["search-bar"]}>
            <input 
                type="text" 
                placeholder={lang[language]} 
                onChange={handleSearch} 
                className={styles["search-input"]}
            />
        </div>
    );
}
export default SearchBar;