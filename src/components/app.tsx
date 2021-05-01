import { FunctionalComponent, h } from 'preact';

import { Header } from './header';
import { SearchBar } from './searchBar';
import { Results } from './results';
import { Nominations } from './nominations';

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root">
      <Header />
      <SearchBar />
      <div class="row">
        <Results />
        <Nominations />
      </div>
    </div>
  );
};

export default App;
