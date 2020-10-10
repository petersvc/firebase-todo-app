import {Dimensions} from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const colors = {
  bg: 'rgba(30, 35, 38, 1)', // 'rgba(20, 25, 29, 1)',
  bg2: 'rgba(28, 33, 36, 1)',
  bgLight: 'rgba(45, 50, 54, 1)',
  bgLight2: 'rgba(60, 65, 69, 1)', // ,
  bgDark: 'rgba(15, 20, 24, 1)',
  icon: 'rgba(200, 200, 200, 1)',
  opaco: 'rgba(150, 150, 150, 1)',
  dim: 'rgba(120, 120, 120, 1)',
  white: 'rgba(250, 250, 250, 1)',
  yellow: 'rgb(255, 170, 46)', // 'rgba(237, 196, 15, 1)',
  orange: 'rgba(249, 100, 0, 1)',
  blue: 'rgba(73, 101, 255, 1)', // 'rgba(73, 101, 255, 1)',
  blue2: 'rgba(131, 232, 239, 1)', // 'rgb(0, 168, 195)'
  purple: 'rgba(73, 70, 168, 1)',
  purple2: 'rgb(142, 10, 186)', // 'rgb(192, 60, 230)''rgba(134, 93, 202, 1)', 'rgba(164, 93, 202, 1)',
  purple3: 'rgb(146, 145, 239)',
  green: 'rgba(166, 217, 201, 1)',
  green2: 'rgba(89, 166, 102, 1)',
  green3: 'rgba(42, 183, 114,1)', // 'rgb(141, 188, 79)',
  red: 'rgb(237, 70, 75)', // 'rgba(255, 60, 86, 1)',
  main: 'rgba(166, 217, 201, 1)',
};

export const diagram = {
  top: 18,
  bottom: 12,
  margin: 23,
  padding: 16,
};

export const fonts = {
  sm: 12,
  md: 15,
  lg: 17,
  primary: 'Roboto',
};
