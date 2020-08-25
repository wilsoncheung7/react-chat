import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import User from '../User';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/' exact component={Login} />
        {/* <Route path='/login' component={Login} /> */}
        <Route path='/register' component={Register} />
        <Route path='/user' component={User} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
