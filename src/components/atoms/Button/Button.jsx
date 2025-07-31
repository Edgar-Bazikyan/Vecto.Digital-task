import React from "react"
import styles from "./Button.module.css"

const Button = ({ children, type }) => {
    const classNames = [styles.button];
    if (type && styles[type]) {
        classNames.push(styles[type]);
    }
    
    return (
        <button className={classNames.join(' ')} >
            {children}
        </button>
    )
}

export default Button;