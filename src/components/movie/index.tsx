import { FunctionalComponent, h } from 'preact';
import style from './style.css';

type MovieType = {
  title: string;
  date: number;
  buttonName: string;
};

export const Movie: FunctionalComponent<MovieType> = (movie: MovieType) => {
  return (
    <li>
      {movie.title} ({movie.date})<button>{movie.buttonName}</button>
    </li>
  );
};
