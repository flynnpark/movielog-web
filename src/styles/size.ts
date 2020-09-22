const { ceil } = Math;

const heightBase = 32;
const heightLg = 40;
const heightSm = 24;
const height = {
  base: heightBase,
  lg: heightLg,
  sm: heightSm,
};

const paddingLg = 24;
const paddingMd = 16;
const paddingSm = 12;
const paddingXs = 8;
const paddingXss = 4;
const padding = {
  lg: paddingLg,
  md: paddingMd,
  sm: paddingSm,
  xs: paddingXs,
  xss: paddingXss,
};

const marginLg = 24;
const marginMd = 16;
const marginSm = 12;
const marginXs = 8;
const marginXss = 4;
const margin = {
  lg: marginLg,
  md: marginMd,
  sm: marginSm,
  xs: marginXs,
  xss: marginXss,
};

const fontBase = 14;
const fontLg = fontBase + 2;
const fontSm = 12;
const heading1 = ceil(fontBase * 2.71);
const heading2 = ceil(fontBase * 2.14);
const heading3 = ceil(fontBase * 1.71);
const heading4 = ceil(fontBase * 1.42);
const heading5 = ceil(fontBase * 1.14);
const lineHeightBase = 1.5715;
const font = {
  base: fontBase,
  lg: fontLg,
  sm: fontSm,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  lineHeightBase,
};

export { height, padding, margin, font };
