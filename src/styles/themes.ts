import {
  presetPalettes,
  presetDarkPalettes,
  PalettesProps,
  generate,
} from '@ant-design/colors';
import { hsv } from 'utils/style';

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

export interface CustomThemeInterface {
  background: string;
  colors: PalettesProps;
  palette: { primary: string; border: string };
  shadow: string;
  typography: {
    primary: string;
    secondary: string;
    disabled: string;
  };
}

const lightTheme: CustomThemeInterface = {
  background: gray[0],
  colors: { ...presetPalettes, gray: generate('#eeeeee') },
  palette: {
    primary: presetPalettes.blue[5],
    border: hsv(0, 0, 0.85),
  },
  shadow: 'rgb(240, 241, 242) 0px 2px 8px 0px ',
  typography: {
    primary: black(85),
    secondary: black(45),
    disabled: black(25),
  },
};

const darkTheme: CustomThemeInterface = {
  ...lightTheme,
  background: gray[11],
  colors: {
    ...presetDarkPalettes,
    gray: generate('#eeeeee', {
      theme: 'dark',
    }),
  },
  palette: {
    primary: presetDarkPalettes.blue[5],
    border: '#434343',
  },
  shadow: 'rgba(0, 0, 0, 0.65) 0px 2px 8px 0px',
  typography: {
    primary: white(85),
    secondary: white(65),
    disabled: white(35),
  },
};

export { lightTheme, darkTheme };
