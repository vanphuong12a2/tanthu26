import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import IndexPage from './components/IndexPage/IndexPage';
import GamePage from './components/GamePage/GamePage';

const AppRouter = () => (
  <Router>
    <div>
      <Route path='/' exact={true} component={IndexPage}/>
      <Route path='/game/:gameId' component={GamePage}/>
    </div>
  </Router>
);

export default AppRouter;