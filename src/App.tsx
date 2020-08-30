import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import GlobalStyle from './GlobalStyle';

const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
