import {Dimensions} from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const colors = {
  black: 'rgba(25, 30, 33, 1)',
  black2: 'rgba(28, 33, 36, 1)',
  blackDimmed: 'rgba(35, 40, 44, 1)',
  bgDark: 'rgba(15, 20, 24, 1)',
  icon: 'rgba(200, 200, 200, 1)',
  dim: 'rgba(160, 160, 160, 1)',
  white: 'rgba(250, 250, 250, 1)',
  yellow: 'rgb(255, 170, 46)',
  orange: 'rgb(255, 126, 108)', // 'rgb(255, 172, 101)',
  orangeBg: 'rgba(255, 126, 108, 0.1)', // 'rgb(46, 43, 41)',
  blue: 'rgba(73, 101, 255, 1)',
  blue2: 'rgba(131, 232, 239, 1)',
  purple: 'rgb(176,153,203)', //
  purpleBg: 'rgba(176,153,204, 0.1)',
  green: 'rgba(0, 255, 102, 1)', // 'rgba(166, 217, 201, 1)',
  greenBg: 'rgba(0, 255, 102, 0.05)', // 'rgba(35, 45, 47, 1)',
  red: 'rgba(255, 60, 86, 1)', // 'rgb(247, 165, 165)',
  redBg: 'rgba(255, 60, 86, 0.1)',
  main: '',
  mainBg: '',
  bg: '',
  bg2: '',
  bgLight: '',
};

colors.main = colors.orange;
colors.mainBg = colors.orangeBg;
colors.bg = colors.black;
colors.bg2 = colors.black2;
colors.bgLight = colors.blackDimmed;

export const diagram = {
  top: 18,
  bottom: 12,
  margin: 23,
  padding: 15,
};

export const fonts = {
  sm: 11,
  md: 14,
  lg: 17,
  primary: 'Roboto',
};
