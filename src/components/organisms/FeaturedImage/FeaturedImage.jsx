import React, {useState, useEffect} from "react"
import MovieDescription from "../MovieDescription/MovieDescription";
import styles from "./FeaturedImage.module.css";
import { useUser } from "../../../context/Context";
import data from '../../../data.json';
const FeaturedImage = () => {
  const [isVideoTime, setIsVideoTime] = useState(false);
  const {currentId} = useUser()
  useEffect(() => {
    setIsVideoTime(false);
    if(currentId) {
      const timer = setTimeout(() => {
        setIsVideoTime(true);
      }, 2000);
      return () => clearTimeout(timer)
    }
  }, [currentId]);
  const movies = data['TendingNow'];
  const currentMovie = currentId ? movies.find(movie => movie.Id === currentId)  : null;
  
  return (
    <div className={styles['featured-image-container']}>
      {isVideoTime ? (
        <video
          src={currentMovie.VideoUrl}
          autoPlay
          loop
          muted
          className={styles['featured-image']}
        />
      ) : (
        <img
          src={currentMovie ? currentMovie.FullScreenImage : "FeaturedCoverImage.png"}
          alt="FeaturedCoverImage"
          className={styles['featured-image']}
        />
      )}
     {/* <img src={currentMovie ? currentMovie.CoverImage : "FeaturedCoverImage.png"} alt="FeaturedImage"  className={styles['featured-image']}/> */}
     <MovieDescription movie={ currentId ?currentMovie : data['Featured']} />
    </div>
  );
}

export default FeaturedImage;
