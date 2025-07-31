import { createContext, useContext, useState, useEffect, useRef} from 'react';

const UserContext = createContext();

const sortMovies = (visitedIds, allMovies) => {
  const visited = visitedIds
    .map(id => allMovies.find(movie => movie.Id === id))
    .filter(Boolean);
  const rest = allMovies.filter(movie => !visitedIds.includes(movie.Id));
  return [...visited, ...rest];
};

export const UserProvider = ({ children, allMovies  }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [image, setImage] = useState(null);
  const [language, setLanguage] = useState('eng');
  const [visited, setVisited] = useState(() => {
    return JSON.parse(sessionStorage.getItem('visitedMovies')) || [];
  });

  const [sortedMovies, setSortedMovies] = useState(() =>
  sortMovies(JSON.parse(sessionStorage.getItem('visitedMovies')) || [], allMovies).slice(0, 50)
);
  const fileInputRef = useRef(null);

  const visitMovie = (id) => {
    setCurrentId(id);
    const updated = [id, ...visited.filter((movieId) => movieId !== id)];

    sessionStorage.setItem('visitedMovies', JSON.stringify(updated));

    setVisited(updated);
    console.log(visited, 'visited')
    setSortedMovies(sortMovies(updated, allMovies).slice(0, 50));; 
  };


  const handleImageClick = () => {
    fileInputRef.current.click(); 
  };

   const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // show preview
    }
  };
  const icons = [
      { src: 'icons/ICON - Search.png', name: {eng : 'Search', arm: 'Որոնել'}, to : '/search' },
      { src: 'icons/Group 46.png', name: {eng : 'Home', arm: 'Գլխավոր'} , to : '/' },
      { src: 'icons/Group 56.png', name: {eng : 'TV Shows', arm: 'Հեռուստաշոուներ'} , to : '/tvshows' },
      { src: 'icons/Group 54.png', name: {eng : 'Movies', arm: 'Ֆիլմեր'} , to : '/movies' },
      { src: 'icons/Group 53.png', name: {eng : 'Genres', arm: 'Ժանրեր'} , to : '/genres' },
      { src: 'icons/Group 47.png', name: {eng : 'Watch Later', arm: 'Դիտել ավելի ուշ'} , to : '/watch-later' },
  ];
  const btnLanguage = {
    play: {
      eng: 'Play',
      arm: 'Միացնել',
    },
    moreInfo: {
      eng: 'More Info',
      arm: 'Իմանալ ավելին',
    },
  };
  const value = { isMenuOpen, setIsMenuOpen,btnLanguage, icons, sortedMovies, visitMovie, currentId, handleImageClick, handleFileChange, image, fileInputRef, language, setLanguage}
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);