import { FunctionalComponent, h } from 'preact';
import { Movie } from '../movie';
import style from './style.css';

export const Nominations: FunctionalComponent = () => {
  return (
    <div class={style.container}>
      <h2>Nominations</h2>
      <ul>
        <Movie title="Rambo" date={1999} buttonName="Remove" />
        <Movie title="Rambo" date={1999} buttonName="Remove" />
        <Movie title="Rambo" date={1999} buttonName="Remove" />
      </ul>
    </div>
  );
};
