import { hsv } from 'utils/style';
import * as size from './size';

type NeutralColor = (percentage: number) => string;

export const black: NeutralColor = (percentage) =>
  percentage < 100 ? `rgba(0, 0, 0, 0.${percentage})` : `rgb(0, 0, 0)`;

export const white: NeutralColor = (percentage) =>
  percentage < 100
    ? `rgba(255, 255, 255, 0.${percentage})`
    : `rgb(255, 255, 255)`;

export const gray = [
  '#ffffff',
  '#fafafa',
  '#f5f5f5',
  '#f0f0f0',
  '#d9d9d9',
  '#bfbfbf',
  '#8c8c8c',
  '#595959',
  '#434343',
  '#262626',
  '#1f1f1f',
  '#141414',
  '#000000',
];

interface BaseThemeInterface {
  size: typeof size;
}

const baseTheme = {
  size,
};

export interface CustomThemeInterface extends BaseThemeInterface {
  background: string;
  shadow: string;
  typography: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  border: {
    width: number;
    radius: number;
    style: string;
    color: {
      base: string;
    };
  };
}

const lightTheme: CustomThemeInterface = {
  ...baseTheme,
  background: gray[1],
  shadow: 'rgb(240, 241, 242) 0px 2px 8px 0px ',
  typography: {
    primary: black(85),
    secondary: black(45),
    disabled: black(25),
  },
  border: {
    width: 1,
    radius: 2,
    style: 'solid',
    color: {
      base: hsv(0, 0, 0.85),
    },
  },
};

const darkTheme: CustomThemeInterface = {
  ...lightTheme,
  background: gray[11],
  shadow: 'rgba(0, 0, 0, 0.65) 0px 2px 8px 0px',
  typography: {
    primary: white(85),
    secondary: white(65),
    disabled: white(35),
  },
  border: {
    ...lightTheme.border,
    color: { ...lightTheme.border.color, base: '#434343' },
  },
};

export { lightTheme, darkTheme };
