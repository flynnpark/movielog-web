export interface CustomThemeInterface {
  background: {
    default: string;
    paper: string;
  };
  shadow: string;
  typography: {
    primary: string;
    secondary: string;
    disabled: string;
  };
}

const lightTheme: CustomThemeInterface = {
  background: {
    default: '#fafafa',
    paper: '#ffffff',
  },
  shadow:
    '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  typography: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
};

const darkTheme: CustomThemeInterface = {
  background: {
    default: '#303030',
    paper: '#424242',
  },
  shadow:
    '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  typography: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
};

export { lightTheme, darkTheme };
