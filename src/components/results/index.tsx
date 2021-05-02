import { FunctionalComponent, h } from 'preact';
import { MovieType } from '../../services/movies';
import { Movie } from '../movie';
import style from './style.css';

export const Results: FunctionalComponent<{
  movies: MovieType[];
  search: string;
}> = ({ movies, search }) => {
  return (
    <div class={style.container}>
      <h2>Results for "{search}"</h2>
      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => {
            console.log(movies);
            return (
              <Movie movie={movie} buttonName="Nominate" key={movie.imdbID} />
            );
          })}
        </ul>
      )}
    </div>
  );
};
