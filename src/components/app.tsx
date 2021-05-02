import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { Header } from './header';
import { SearchBar } from './searchBar';
import { Results } from './results';
import { Nominations } from './nominations';
import { MovieType } from '../services/movies';
import { Banner } from './banner';

const App: FunctionalComponent = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState(Array<MovieType>());
  const [nominates, setNominates] = useState(Array<MovieType>());

  useEffect(() => {
    const newNominates = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) {
        continue;
      }
      if (key.startsWith('movie:')) {
        newNominates.push(JSON.parse(localStorage.getItem(key)!));
      }
    }
    setNominates(newNominates);
  }, []);

  function nominateMovie(movie: MovieType): void {
    const newNominates = [...nominates, movie];
    setNominates(newNominates);
    localStorage.setItem(`movie:${movie.imdbID}`, JSON.stringify(movie));
  }

  function removeNominatedMovie(movie: MovieType): void {
    const newNominates = nominates.filter(
      (nominate) => nominate.imdbID !== movie.imdbID
    );
    setNominates(newNominates);
    localStorage.removeItem(`movie:${movie.imdbID}`);
  }

  return (
    <div id="preact_root">
      <Header />
      <SearchBar setMovies={setMovies} search={search} setSearch={setSearch} />
      {nominates.length === 5 && <Banner />}
      <div class="row">
        <Results
          movies={movies}
          nominates={nominates}
          search={search}
          nominateMovie={nominateMovie}
        />
        <Nominations
          nominates={nominates}
          removeNominatedMovie={removeNominatedMovie}
        />
      </div>
    </div>
  );
};

export default App;
