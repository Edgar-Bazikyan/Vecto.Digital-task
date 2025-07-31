import React from "react"
import { Outlet } from "react-router-dom"
import Menu from "../components/organisms/Menu/Menu"
import { useUser } from "../context/Context"
import styles from "./Main.module.css"
const Main = () => {
    const {isMenuOpen, setIsMenuOpen} = useUser();
    return (
        <div className={`${styles['main']} ${isMenuOpen ? styles['open-Menu'] : ""}`}>
            <Menu open={isMenuOpen} setOpen={setIsMenuOpen}  />
            <div className={styles['overlay']} onClick={() =>{setIsMenuOpen(false)}}>
            <Outlet />
            </div>
        </div>
    )
}


export default Main