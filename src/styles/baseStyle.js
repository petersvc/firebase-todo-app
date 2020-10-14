import {Dimensions} from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const colors = {
  bg: 'rgba(25, 30, 33, 1)', // 'rgba(20, 25, 29, 1)',
  bg2: 'rgba(28, 33, 36, 1)',
  bgLight: 'rgba(35, 40, 44, 1)', // 'rgba(45, 50, 54, 1)',
  bgLight2: 'rgba(60, 65, 69, 1)', // ,
  bgDark: 'rgba(15, 20, 24, 1)',
  icon: 'rgba(200, 200, 200, 1)',
  dim: 'rgba(160, 160, 160, 1)',
  white: 'rgba(250, 250, 250, 1)',
  yellow: 'rgb(255, 170, 46)', // 'rgba(237, 196, 15, 1)',
  orange: 'rgba(249, 100, 0, 1)',
  blue: 'rgba(73, 101, 255, 1)', // 'rgba(73, 101, 255, 1)',
  blue2: 'rgba(131, 232, 239, 1)', // 'rgb(0, 168, 195)'
  purple: 'rgb(176,153,174)', // 'rgb(176,153,203)', //
  green: 'rgba(166, 217, 201, 1)', // 'rgb(178, 228, 189)', // 'rgb(10, 220, 197)', //
  greenBg: 'rgba(35, 45, 47, 1)', // 'rgba(60,72,71, 0.25)',
  red: 'rgb(247, 165, 165)', // 'rgb(237, 70, 75)', // 'rgba(255, 60, 86, 1)',
  main: '',
};

colors.main = colors.green;

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
