import { FunctionalComponent, h } from 'preact';
import { useEffect } from 'react';
import { MovieType } from '../../services/movies';
import { Movie } from '../movie';
import style from './style.css';

export const Results: FunctionalComponent<{
  movies: MovieType[];
  nominates: MovieType[];
  search: string;
  nominateMovie: (movie: MovieType) => void;
  error: string | null;
}> = ({ movies, search, nominateMovie, nominates, error }) => {
  return (
    <div class={style.container}>
      <h2>Results for "{search}"</h2>
      {nominates.length === 5 && (
        <p class={style.validation}>
          You have validated your <strong>5</strong> movies{' '}
        </p>
      )}
      {nominates.length === 4 && (
        <p class={style.validation}>
          You must still nominate <strong>1</strong> movie{' '}
        </p>
      )}
      {nominates.length < 4 && (
        <p class={style.validation}>
          You must still nominate <strong>{5 - nominates.length}</strong> movies{' '}
        </p>
      )}
      {error ? (
        <p class={style.error}>{error}</p>
      ) : (
        <ul>
          {movies.map((movie) => {
            const isDisabled =
              nominates.length === 5 ||
              nominates.some((nominate) => nominate.imdbID === movie.imdbID);
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
