import { FunctionalComponent, h } from 'preact';
import style from './style.css';

export const Header: FunctionalComponent = () => {
  return (
    <header class={style.header}>
      <h1>The Shoppies</h1>
    </header>
  );
};
