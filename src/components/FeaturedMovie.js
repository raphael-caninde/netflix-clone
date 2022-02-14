import React, { useContext } from 'react';
import MoviesContext from '../context/MoviesContext';
import './FeaturedMovie.css';

export default function FeaturedMovie() {
  const { featuredData } = useContext(MoviesContext);

  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${ featuredData.backdrop_path })`
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">
            { featuredData.original_name }
          </div>
          <div className="featured--info">
            <div className="featured--points">{featuredData.vote_average} pontos</div>
            <div className="featured--year">2099</div>
            <div className="featured--year">
              {featuredData.number_of_seasons} temporada{featuredData.number_of_seasons !== 1 ? 's' : '' }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
