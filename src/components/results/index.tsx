import { FunctionalComponent, h } from 'preact';
import { Movie } from '../movie';
import style from './style.css';

export const Results: FunctionalComponent = () => {
  return (
    <div class={style.container}>
      <h2>Results for "ram"</h2>
      <ul>
        <Movie title="Rambo" date={1999} buttonName="Nominate" />
        <Movie title="Rambo" date={1999} buttonName="Nominate" />
        <Movie title="Rambo" date={1999} buttonName="Nominate" />
      </ul>
    </div>
  );
};
