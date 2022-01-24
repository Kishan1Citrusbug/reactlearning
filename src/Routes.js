import React, { Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import List from './Components/Pages/List';
import Form from './Components/Pages/Form';

function Routes() {
  return (
    <Router>
      <Suspense fallback="Loading...">
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/add/" component={Form} />
          <Route path="/edit/:id" component={Form} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
