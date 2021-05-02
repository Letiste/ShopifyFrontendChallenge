import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';

import { Header } from './header';
import { SearchBar } from './searchBar';
import { Results } from './results';
import { Nominations } from './nominations';
import { MovieType } from '../services/movies';

const App: FunctionalComponent = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState(Array<MovieType>());
  const [nominates, setNominates] = useState(Array<MovieType>());
  return (
    <div id="preact_root">
      <Header />
      <SearchBar setMovies={setMovies} search={search} setSearch={setSearch} />
      <div class="row">
        <Results movies={movies} search={search} />
        <Nominations nominates={nominates} />
      </div>
    </div>
  );
};

export default App;
