import { FunctionalComponent, h } from 'preact';
import { Router, Route } from 'preact-router';

import { Header } from './header';
import SharedNominations from './sharedNominations';
import Home from './home';

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root">
      <Header />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/shared" component={SharedNominations} />
      </Router>
    </div>
  );
};

export default App;
