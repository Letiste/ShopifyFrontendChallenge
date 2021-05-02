import { FunctionalComponent, h } from 'preact';
import style from './style.css';
import { MovieType } from '../../services/movies';

export const Movie: FunctionalComponent<{
  movie: MovieType;
  buttonName: string;
}> = ({ movie, buttonName }) => {
  return (
    <li>
      {movie.Title} ({movie.Year})<button>{buttonName}</button>
    </li>
  );
};
