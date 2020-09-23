import {Dimensions} from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const colors = {
  bg: 'rgba(20, 25, 29, 1)',
  bgLight: 'rgba(23, 28, 32, 1)',
  bgLight2: 'rgba(35, 40, 44, 1)',
  bgDark: 'rgba(0, 5, 9, 1)',
  icon: 'rgba(200, 200, 200, 1)',
  opaco: 'rgba(150, 150, 150, 1)',
  white: 'rgba(250, 250, 250, 1)',
  yellow: 'rgba(237, 196, 15, 1)',
  orange: 'rgba(249, 100, 0, 1)',
  blue: 'rgba(73, 101, 255, 1)',
  blue2: 'rgba(80, 81, 231, 1)',
  blue3: 'rgba(131, 232, 239, 1)',
  green: 'rgba(166, 217, 201, 1)',
  green2: 'rgba(89, 166, 102, 1)',
  red: 'rgba(255, 60, 86, 1)',
  main: 'rgba(73, 70, 168, 1)',
};

export const diagram = {
  top: 18,
  bottom: 12,
  margin: 18,
  padding: 14,
};

export const fonts = {
  sm: 11,
  md: 15,
  lg: 17,
  primary: 'Roboto',
};
