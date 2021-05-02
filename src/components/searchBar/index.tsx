import { FunctionalComponent, h, JSX } from 'preact';
import { useEffect, StateUpdater, useCallback } from 'preact/hooks';
import { debounce } from 'ts-debounce';

import style from './style.css';
import { getMovies, MovieType } from '../../services/movies';

export const SearchBar: FunctionalComponent<{
  setMovies: StateUpdater<MovieType[]>;
  search: string;
  setSearch: StateUpdater<string>;
}> = ({ setMovies, search, setSearch }) => {
  function handleChange(
    newSearch: JSX.TargetedEvent<HTMLInputElement, Event>
  ): void {
    setSearch(newSearch.currentTarget.value);
  }

  const debouncedGetMovies = useCallback(
    debounce((search: string) => getMovies(search).then(setMovies), 300),
    []
  );
  useEffect(() => {
    if (search.length > 0) {
      debouncedGetMovies(search);
    }
  }, [search, debouncedGetMovies]);

  return (
    <div class={style.container}>
      <label htmlFor="search">Movie title</label>
      <input
        class={style.input}
        type="text"
        name="search"
        id="search"
        value={search}
        onInput={handleChange}
      />
    </div>
  );
};
