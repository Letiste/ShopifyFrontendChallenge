import { FunctionalComponent, h } from 'preact';
import { MovieType } from '../../services/movies';
import { Movie } from '../movie';
import style from './style.css';

export const Results: FunctionalComponent<{
  movies: MovieType[];
  nominates: MovieType[];
  search: string;
  nominateMovie: (movie: MovieType) => void;
}> = ({ movies, search, nominateMovie, nominates }) => {
  console.log('rebuilt');
  return (
    <div class={style.container}>
      <h2>Results for "{search}"</h2>
      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => {
            const isDisabled = nominates.some(
              (nominate) => nominate.imdbID === movie.imdbID
            );
            return (
              <Movie
                movie={movie}
                buttonName="Nominate"
                key={movie.imdbID}
                handleClick={nominateMovie}
                isDisabled={isDisabled}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};
