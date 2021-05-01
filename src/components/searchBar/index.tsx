import { FunctionalComponent, h } from 'preact';
import style from './style.css';

export const SearchBar: FunctionalComponent = () => {
  return (
    <div class={style.container}>
      <label htmlFor="search">Movie title</label>
      <input class={style.input} type="text" name="search" id="search" />
    </div>
  );
};
