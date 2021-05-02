import { FunctionalComponent, h } from 'preact';
import { MovieType } from '../../services/movies';
import { Movie } from '../movie';
import style from './style.css';

export const Nominations: FunctionalComponent<{
  nominates: MovieType[];
  removeNominatedMovie: (movie: MovieType) => void;
}> = ({ nominates, removeNominatedMovie }) => {
  return (
    <div class={style.container}>
      <h2>Nominations</h2>
      {nominates.length > 0 && (
        <ul>
          {nominates.map((movie) => (
            <Movie
              movie={movie}
              buttonName="Remove"
              key={movie.imdbID}
              handleClick={removeNominatedMovie}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
