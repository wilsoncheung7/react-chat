import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Register from '../Register';
import User from '../User';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/user' component={User} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
