import { FunctionalComponent, h } from 'preact';
import { MovieType } from '../../services/movies';
import { Movie } from '../movie';
import style from './style.css';

export const Nominations: FunctionalComponent<{ nominates: MovieType[] }> = ({
  nominates,
}) => {
  return (
    <div class={style.container}>
      <h2>Nominations</h2>
      {nominates.length > 0 && (
        <ul>
          {nominates.map((movie) => {
            console.log(nominates);
            return (
              <Movie movie={movie} buttonName="Nominate" key={movie.imdbID} />
            );
          })}
        </ul>
      )}
    </div>
  );
};
