import React from "react"
import styles from './NotFoundPage.module.css'
const NotFoundPage = () => {
    return (
        <div className={styles['not-found']} >
            <h1>404 - Page Not Found</h1>
            <p>The page you’re looking for doesn’t exist.</p>
        </div>
    )
}
export default NotFoundPage