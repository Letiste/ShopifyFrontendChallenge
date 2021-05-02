import { FunctionalComponent, h } from 'preact';
import style from './style.css';

export const Banner: FunctionalComponent = () => {
  return (
    <div class={style.container}>
      <p>You nominated your 5 films !</p>
    </div>
  );
};
