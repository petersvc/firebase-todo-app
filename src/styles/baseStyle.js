import { Dimensions } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const colors = {
  black: 'rgba(25, 30, 33, 1)',
  black2: 'rgba(28, 33, 36, 1)',
  blackDimmed: 'rgba(35, 40, 44, 1)',
  blackDimmed2: 'rgba(40, 45, 49, 1)',
  bgDark: 'rgba(15, 20, 24, 1)',
  icon: 'rgba(200, 200, 200, 1)',
  dim: 'rgba(160, 160, 160, 1)',
  dim2: 'rgba(75, 75, 75, 1)',
  white: 'rgba(250, 250, 250, 1)',
  yellow: 'rgb(255, 170, 46)',
  orange: 'rgb(245, 96, 98)', // 'rgb(255, 172, 101)',
  orangeBg: 'rgba(255, 126, 108, 0.1)', // 'rgb(46, 43, 41)',
  blue: 'rgb(80, 118, 215)', // 'rgba(0, 165, 208, 1)', // 'rgba(73, 101, 255, 1)',
  blue2: 'rgba(131, 232, 239, 1)',
  purple: 'rgba(146, 61, 250, 1)',
  purple2: 'rgb(28, 28, 38)',
  purple3: 'rgb(35, 35, 48)',
  purpleBg: 'rgba(176,153,204, 0.1)',
  green: 'rgb(109, 187, 186)', // 'rgb(198, 223, 251)', // 'rgb(0, 172, 157)', // 'rgba(0, 255, 102, 1)', // 'rgba(48, 99, 110, 1)', //
  greenBg: 'rgba(0, 255, 102, 0.05)', // 'rgba(35, 45, 47, 1)',
  red: 'rgb(255, 106, 118)', // 'rgba(255, 60, 86, 1)', //
  red2: 'rgb(247, 165, 165)',
  redBg: 'rgba(255, 60, 86, 0.1)',
  pink: 'rgb(225, 118, 129)',
  main: '',
  mainBg: '',
  bg: '',
  bg2: '',
  bgLight: '',
  bgLight2: '',
};

colors.main = colors.red;
colors.mainBg = colors.orangeBg;
colors.bg = colors.purple2;
colors.bg2 = colors.purple3;
colors.bgLight = colors.purple3;
colors.bgLight2 = colors.purple3;

export const diagram = {
  top: 18,
  bottom: 12,
  margin: 23,
  padding: 15,
  iconSize: 20,
};

export const fonts = {
  sm: 11,
  md: 15,
  lg: 17,
  family: {
    regular: 'Karla-Regular',
    bold: 'Karla-Bold',
  },
};
