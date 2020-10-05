import React, { useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'styles/themes';
import GlobalStyle from 'styles/GlobalStyle';

type ThemeType = 'light' | 'dark';

const MovieLogApp = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;

  const [theme, setTheme] = useState<ThemeType>('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MovieLogApp;
