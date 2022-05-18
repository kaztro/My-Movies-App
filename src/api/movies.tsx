import { API_HOST, API_SEARCH_HOST, API_KEY } from '../constants/URL';


export function getPopularMovies() {
  const url = `${API_HOST}/popular?${API_KEY}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}

export function getMoviesByName(title) {
  const url = `${API_SEARCH_HOST}?${API_KEY}&query=${title}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}

export function getMovieById(idMovie) {
  const url = `${API_HOST}/${idMovie}?${API_KEY}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}
