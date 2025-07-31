import React, { useRef, useState } from "react";
import { useUser } from "../../../context/Context";
import styles from "./ImageUpload.module.css";
const ImageUpload = () => {
    const {handleImageClick, handleFileChange, image, fileInputRef} = useUser();

    return (
        <div>
        <img
            src={image || '9703596.png'}
            alt="Click to upload"
            onClick={handleImageClick}
            className={styles["profile-image"]}
        />
        <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
        />
        </div>
    );
    }

export default ImageUpload;