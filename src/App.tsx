import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import Pockedex from './pages/Pockedex';

const App = () => {
  return (
    <Router>
      <Route
        render={() => (
          <>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/pockedex" component={Pockedex} />
            </Switch>
          </>
        )}
      />
    </Router>
  );
};

export default App;
