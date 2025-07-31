import React from "react"
import styles from "./Icon.module.css";
const Icon = ({ src, active }) => {
    return (
        <div className={`${styles['icon']} ${active ? styles['active'] : ''}`}>
           <img src={src} alt={src}  className={styles['icon-image']}/>
        </div>
    )
}

export default Icon;