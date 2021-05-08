import { FunctionalComponent, h, JSX } from 'preact';
import { useEffect, StateUpdater, useCallback } from 'preact/hooks';
import { debounce } from 'ts-debounce';

import style from './style.css';
import { getMovies, MovieType } from '../../services/movies';

export const SearchBar: FunctionalComponent<{
  setMovies: StateUpdater<MovieType[]>;
  setError: StateUpdater<string | null>;
  search: string;
  setSearch: StateUpdater<string>;
}> = ({ setMovies, search, setSearch, setError }) => {
  function handleChange(
    newSearch: JSX.TargetedEvent<HTMLInputElement, Event>
  ): void {
    setSearch(newSearch.currentTarget.value);
  }

  const debouncedGetMovies = useCallback(
    debounce((search: string) => {
      if (search.length > 0) {
        getMovies(search).then(({ response, error, result }) => {
          if (response === 'True') {
            const newMovies = Array<MovieType>();
            // filter because OMDB returns some movies in double
            result.forEach(
              (movie) =>
                !newMovies.some(
                  (newMovie) => newMovie.imdbID === movie.imdbID
                ) && newMovies.push(movie)
            );
            setMovies(newMovies);
            setError(null);
          } else {
            setError(error);
            setMovies([]);
          }
        });
      } else {
        setError(null);
        setMovies([]);
      }
    }, 300),
    []
  );
  useEffect(() => {
    debouncedGetMovies(search);
  }, [search, debouncedGetMovies]);

  return (
    <div class={style.container}>
      <label class={style.label} htmlFor="search">
        Movie title
      </label>
      <input
        class={style.input}
        type="text"
        name="search"
        id="search"
        placeholder="Iron Man"
        value={search}
        onInput={handleChange}
      />
    </div>
  );
};
