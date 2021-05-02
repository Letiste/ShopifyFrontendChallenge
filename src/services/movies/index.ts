import axios from 'axios';

export type MovieType = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export function getMovies(search: string): Promise<MovieType[]> {
  return axios
    .get(`http://www.omdbapi.com/?apikey=e8e3325a&type=movie&s=${search}`)
    .then((res) => res.data.Search || []);
}
