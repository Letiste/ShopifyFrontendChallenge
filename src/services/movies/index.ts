import axios from 'axios';

const baseURL = 'http://www.omdbapi.com/?apikey=e8e3325a&type=movie';

export interface MovieType {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

interface MovieSearchResult {
  response: 'True' | 'False';
  result: MovieType[];
  error: string;
}

export interface MovieInfoType extends MovieType {
  Plot: string;
  Genre: string;
  Runtime: string;
}

export function getMovies(search: string): Promise<MovieSearchResult> {
  return axios.get(`${baseURL}&s=${search}`).then((res) => ({
    response: res.data.Response,
    result: res.data.Search,
    error: res.data.Error,
  }));
}

export function getMovieById(id: string): Promise<MovieInfoType> {
  return axios.get(`${baseURL}&i=${id}`).then((res) => res.data);
}
