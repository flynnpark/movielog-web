import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import NotFound from 'routes/404';
import Explore from 'routes/Explore';
import Feed from 'routes/Feed';
import Home from 'routes/Home';
import Login from 'routes/Login';
import Profile from 'routes/Profile';
import Search from 'routes/Search';
import SignUp from 'routes/SignUp';
import GlobalStyle from 'styles/GlobalStyle';
import { lightTheme, darkTheme } from 'styles/themes';
import Header from 'components/Header';

type ThemeType = 'light' | 'dark';

const App: React.FunctionComponent = () => {
  const [theme, setTheme] = useState<ThemeType>('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/feed" component={Feed} />
            <Route path="/explore" component={Explore} />
            <Route path="/search" component={Search} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/profile" component={Profile} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
