import React, { useState } from 'react';
import Router from 'routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { lightTheme, darkTheme } from 'styles/themes';

type ThemeType = 'light' | 'dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeType>('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
