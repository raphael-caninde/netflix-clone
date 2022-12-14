import React, { useContext } from 'react';
import MoviesContext from '../../context/MoviesContext';
import MovieRow from '../../components/MovieRow';
import FeaturedMovie from '../../components/FeaturedMovie';
import Header from '../../components/Header';
import './Home.css';

export default function Home() {
  const { movieList, featuredData } = useContext(MoviesContext);
  console.log(movieList)

  return (
    <div className="page">
      <Header />
      { featuredData &&
        <FeaturedMovie />
      }
      <section className="lists">
        {movieList.map((item, idx) => (
          <MovieRow
            key={ idx }
            title={ item.title }
            items={ item.items }
          />
        ))}
      </section>
    </div>
  )
}
