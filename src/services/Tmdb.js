const API_KEY = '6bee8f2c77002869e65a7aba1d0f5c88';
const API_BASE = 'https://api.themoviedb.org/3';

const apiFetch = async (endpoint) => {
  const request = await fetch(`${API_BASE}${endpoint}`);
  const json = await request.json();
  return json;
}

export const objectValue =  {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'originals do Netflix',
        items: await apiFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await apiFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await apiFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await apiFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await apiFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await apiFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await apiFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await apiFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
      }
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if(movieId) {
      switch (type) {
        case 'movie':
          info = await apiFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
          break;
        case 'tv':
          info = await apiFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
          break;

        default:
          info = null;
          break;
      }
    }
    return info;
  }
}
