export interface ITheme {
  background: {
    default: string;
  };
  typography: {
    primary: string;
    secondary: string;
    disabled: string;
  };
}

const lightTheme: ITheme = {
  background: {
    default: '#fafafa',
  },
  typography: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
};

const darkTheme: ITheme = {
  background: {
    default: '#303030',
  },
  typography: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
};

export { lightTheme, darkTheme };
