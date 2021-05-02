import { FunctionalComponent, h } from 'preact';
import style from './style.css';
import { MovieType } from '../../services/movies';

export const Movie: FunctionalComponent<{
  movie: MovieType;
  buttonName: string;
  handleClick: (movie: MovieType) => void;
  isDisabled?: boolean;
}> = ({ movie, buttonName, handleClick, isDisabled }) => {
  function onClick(): void {
    handleClick(movie);
  }

  return (
    <li>
      {movie.Title} ({movie.Year})
      <button disabled={isDisabled} onClick={onClick}>
        {buttonName}
      </button>
    </li>
  );
};
