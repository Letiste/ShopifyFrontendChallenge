import { FunctionalComponent, h } from 'preact';
import { MovieInfoType } from '../../../services/movies';
import style from './style.css';

export const SharedNomination: FunctionalComponent<{
  nominate: MovieInfoType;
}> = ({ nominate }) => {
  return (
    <div class={style.container}>
      <img
        class={style.poster}
        src={nominate.Poster}
        alt={`Poster of the film ${nominate.Title}`}
      />
      <div class={style.infos}>
        <h2>{nominate.Title}</h2>
        <p>{nominate.Plot}</p>
        <i>{nominate.Genre}</i>
      </div>
    </div>
  );
};
