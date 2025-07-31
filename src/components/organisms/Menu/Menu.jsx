import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import Icon from "../../atoms/Icon/Icon";
import ImageUpload from "../../molecules/ImageUpload/ImageUpload";
import {Link, useLocation} from "react-router-dom";
import { useUser } from "../../../context/Context";
import LanguageSelector from "../../atoms/LanguageSelector/LanguageSelector";
import SearchBar from "../../molecules/SearchBar/SearchBar";

const Menu = ({open, setOpen, setSearchTerm, searchTerm}) => {
    const { icons, language } = useUser();
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    }
    
    return (
        <div className={`${styles['menu']} ${open ? styles['open'] : ""}`} onClick={() => setOpen(!open)}>
            <div className={styles["profile"]} onClick={(e) => {
                if (!open) {
                    e.preventDefault();
                    setOpen(true);
                } else {
                    e.stopPropagation();
                }
            }}><ImageUpload /></div>
            
            <div className={styles["menu-items"]}>
                {icons.map((icon) => (
                    <Link
                        key={icon.name}
                        to={icon.to}
                        className={styles["menu-item"]}
                            onClick={e => {
                                if (!open) {
                                    e.preventDefault();
                                    setOpen(true);      
                                } else {
                                    e.stopPropagation(); 
                                    setOpen(false)
                                }
                            }}
                    >
                        <Icon src={icon.src} active={isActive(icon.to)} />
                        <span className={styles["icon-name"]}>{icon.name[language]}</span>
                    </Link>
                ))}
                <div className={styles["extra-menu-item"]}>

                        <div onClick={(e) => {
                            if (!open) {
                            e.preventDefault();
                            setOpen(true);
                        } else {
                            e.stopPropagation();
                        }}}>
                            <LanguageSelector />
                        </div>
                        
                </div>
            </div>
    </div>
    );
};

export default Menu;
 