import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Page from './components/Page';
import IncomeCalculator from './routes/IncomeCalculator';
import ItemOne from './routes/ItemOne';
import ItemTwo from './routes/ItemTwo';
import ItemThree from './routes/ItemThree';

import './App.scss';

function App() {
  return (
    <Router>
      <Page>
        <Switch>
          <Route path={'/'} exact component={IncomeCalculator} />
          <Route path={'/item-one'} exact component={ItemOne} />
          <Route path={'/item-two'} exact component={ItemTwo} />
          <Route path={'/item-three'} exact component={ItemThree} />
        </Switch>
      </Page>
    </Router>
  );
}

export default App;
