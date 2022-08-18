import React, { useContext } from 'react';
import MoviesContext from '../../context/MoviesContext';
import './FeaturedMovie.css';

export default function FeaturedMovie() {
  const { featuredData } = useContext(MoviesContext);
  let firstDate = new Date(featuredData.first_air_date);
  let genres = [];

  for (let i in featuredData.genres) {
    genres.push(featuredData.genres[i].name)
  }

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
            <div className="featured--year">{ firstDate.getFullYear() }</div>
            <div className="featured--seasons">
              {featuredData.number_of_seasons} temporada{featuredData.number_of_seasons !== 1 ? 's' : '' }
            </div>
          </div>
          <div className="featured--description">
            { featuredData.overview }
          </div>
          <div className="featured--buttons">
            <a href={`/watch/${featuredData.id}`} className="featured--watchbutton">
              Assitir
            </a>
            <a href={`/list/add/${featuredData.id}`} className="featured--mylistbutton">
              + Minha Lista
            </a>
          </div>
          <div className="featured--genres">
            <strong>Gêneros:</strong> { genres.join(', ') }
          </div>
        </div>
      </div>
    </section>
  )
}
