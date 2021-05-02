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
}> = ({ movies, search, nominateMovie, nominates }) => {
  return (
    <div class={style.container}>
      <h2>Results for "{search}"</h2>
      {nominates.length === 5 && <p>You have validated your 5 movies </p>}
      {nominates.length === 4 && <p>You must still nominate 1 movie </p>}
      {nominates.length < 4 && (
        <p>You must still nominate {5 - nominates.length} movies </p>
      )}
      {movies.length > 0 && (
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
