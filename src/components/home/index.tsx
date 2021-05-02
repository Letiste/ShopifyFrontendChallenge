import { Fragment, FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import { MovieType } from '../../services/movies';
import { Banner } from '../banner';
import { Nominations } from '../nominations';
import { Results } from '../results';
import { SearchBar } from '../searchBar';
import style from './style.css';

function initialNominates(): MovieType[] {
  const newNominates = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    const key = window.localStorage.key(i);
    if (!key) {
      continue;
    }
    if (key.startsWith('movie:')) {
      newNominates.push(JSON.parse(window.localStorage.getItem(key)!));
    }
  }
  return newNominates;
}
const Home: FunctionalComponent = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState(Array<MovieType>());
  const [nominates, setNominates] = useState(initialNominates);

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
    <Fragment>
      <SearchBar setMovies={setMovies} search={search} setSearch={setSearch} />
      {nominates.length === 5 && <Banner nominates={nominates} />}
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
    </Fragment>
  );
};

export default Home;
