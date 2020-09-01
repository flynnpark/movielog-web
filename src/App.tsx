import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from 'routes/Home';
import Profile from 'routes/Profile';
import Search from 'routes/Search';
import GlobalStyle from 'styles/GlobalStyle';
import { lightTheme, darkTheme } from 'styles/themes';
import Header from 'components/Header';

type ThemeType = 'light' | 'dark';

const App: React.FunctionComponent = () => {
  const [theme, setTheme] = useState<ThemeType>('light');

  useEffect(() => {
    const timer = setTimeout(() => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }, 10000);
    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
