import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Journal from './components/Journal';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Journal} />
      </Switch>
    </Router>
  );
};

export default App;