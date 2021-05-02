import axios from 'axios';

const baseURL = 'http://www.omdbapi.com/?apikey=e8e3325a&type=movie';

export interface MovieType {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface MovieInfoType extends MovieType {
  Plot: string;
  Genre: string;
  Runtime: string;
}

export function getMovies(search: string): Promise<MovieType[]> {
  return axios
    .get(`${baseURL}&s=${search}`)
    .then((res) => res.data.Search || []);
}

export function getMovieById(id: string): Promise<MovieInfoType> {
  return axios.get(`${baseURL}&i=${id}`).then((res) => res.data);
}
