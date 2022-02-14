import React, { useEffect, useState } from 'react';
import MoviesContext from './MoviesContext';
import { objectValue } from '../services/Tmdb';

export default function MoviesProvider({ children }) {
  const [movieList, setMovieList] = useState([]);
  const [ featuredData, setFeaturedData ] = useState(null);

  const moviesData = {
    movieList,
    setMovieList,
    featuredData,
    setFeaturedData,
  };

  useEffect(() => {
    (async () => {
      let list = await objectValue.getHomeList();
      setMovieList(list);

      let originals = list.filter( i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await objectValue.getMovieInfo(chosen.id, 'tv');
      console.log(chosenInfo, 'info')
      setFeaturedData(chosenInfo);
    })();
  }, []);

  return (
    <MoviesContext.Provider value={ moviesData }>
      { children }
    </MoviesContext.Provider>
  )
}
