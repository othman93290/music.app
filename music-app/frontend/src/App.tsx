import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MusicCatalog from './components/MusicCatalog';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Music Catalog</h1>
        <Switch>
          <Route path="/" exact component={MusicCatalog} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;