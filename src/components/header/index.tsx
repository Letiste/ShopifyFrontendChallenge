import { FunctionalComponent, h } from 'preact';
import style from './style.css';

export const Header: FunctionalComponent = () => {
  return (
    <header class={style.header}>
      <h1>
        <a href="/">The Shoppies</a>
      </h1>
    </header>
  );
};
