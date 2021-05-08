import { FunctionalComponent, h } from 'preact';
import style from './style.css';
import { MovieType } from '../../services/movies';

export const Movie: FunctionalComponent<{
  movie: MovieType;
  buttonName: 'Nominate' | 'Remove';
  handleClick: (movie: MovieType) => void;
  isDisabled?: boolean;
}> = ({ movie, buttonName, handleClick, isDisabled }) => {
  function onClick(): void {
    handleClick(movie);
  }

  return (
    <li class={style.movie}>
      <button
        class={`${style.btn} ${style[buttonName]}`}
        disabled={isDisabled}
        onClick={onClick}
      >
        {buttonName}
      </button>
      {movie.Title} ({movie.Year})
    </li>
  );
};
