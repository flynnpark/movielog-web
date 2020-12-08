import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import Home from 'pages/home';
import Feed from 'pages/feed';
import Explore from 'pages/explore';
import Search from 'pages/search';
import MovieDetail from 'pages/movieDetails';
import Login from 'pages/login';
import SignUp from 'pages/sign-up';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <PublicRoutes />
      </main>
    </BrowserRouter>
  );
};

const PublicRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact={true} path={'/'} component={Home} />
      <Route path={'/feed'} component={Feed} />
      <Route path={'/explore'} component={Explore} />
      <Route path={'/search'} component={Search} />
      <Route path={'/movies/:movieId'} component={MovieDetail} />
      <Route path={'/login'} component={Login} />
      <Route path={'/sign-up'} component={SignUp} />
    </Switch>
  );
};

export default Router;
