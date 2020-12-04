import { Dimensions } from 'react-native';

export const dimensions = {
   fullHeight: Dimensions.get('window').height,
   fullWidth: Dimensions.get('window').width,
};

export const colors = {
   black: 'rgb(43, 46, 51)', // 'rgba(28, 33, 36, 1)',
   black2: 'rgba(40, 43, 48, 1)',
   blackDimmed: 'rgba(35, 40, 44, 1)',
   blackDimmed2: 'rgb(43, 45, 50)', // 'rgba(40, 45, 49, 1)',
   blackDimmed3: 'rgb(53, 55, 60)', // 'rgba(55, 60, 64, 1)',
   bgDark: 'rgba(15, 20, 24, 1)',
   icon: 'rgba(200, 200, 200, 1)',
   dim: 'rgba(160, 160, 160, 1)', // 'rgba(102, 119, 135, 1)',
   dim2: 'rgba(75, 75, 75, 1)',
   white: 'rgb(255,255,255)', // 'rgba(142, 159, 175, 1)',
   yellow: 'rgb(255, 170, 46)',
   orange: 'rgb(245, 96, 98)', // 'rgb(255, 172, 101)',
   orangeBg: 'rgba(255, 126, 108, 0.1)', // 'rgb(46, 43, 41)',
   blue: 'rgb(103, 123, 196)', // 'rgb(64, 132, 239)', // 'rgba(73, 101, 255, 1)',
   blueBg: 'rgba(64, 132, 239, 0.15)',
   blue2: 'rgb(178, 193, 251)', // 'rgb(198, 223, 251)',
   blue3: 'rgb(142, 159, 195)',
   darkBlue: 'rgb(62, 71, 90)',
   darkBlue2: 'rgb(54, 64, 79)',
   purple: 'rgb(117, 77, 243)', // 'rgba(172, 105, 254, 1)', // 'rgba(146, 61, 250, 1)',
   purple2: 'rgb(159, 91, 245)',
   purple3: 'rgb(39, 39, 52)',
   purpleBg: 'rgba(97, 97, 243, 0.1)',
   green: 'rgb(190, 232, 205)', // 'rgb(90, 194, 56)', // , // 'rgb(139, 204, 180)', //
   greenBg: 'rgba(190, 232, 205, 0.15)', // 'rgba(90, 194, 56, 0.1)', //
   red: 'rgb(252, 89, 94)', // 'rgb(255, 106, 118)', // , // rgba(255, 60, 86, 1)', //
   red2: 'rgb(247, 165, 165)',
   redBg: 'rgba(252, 89, 94, 0.1)',
   pink: 'rgb(225, 118, 129)',
   main: '',
   mainAlt: '',
   mainBg: '',
   bg: '',
   bg2: '',
   bgLight: '',
   bgLight2: '',
   bgLight3: '',
};

colors.main = colors.blue;
colors.mainAlt = colors.blue;
colors.mainBg = colors.blueBg;
colors.bg = colors.black;
colors.bg2 = colors.black2;
colors.bgLight = colors.blackDimmed;
colors.bgLight2 = colors.blackDimmed2;
colors.bgLight3 = colors.blackDimmed3;

export const diagram = {
   top: 18,
   bottom: 12,
   margin: 20,
   padding: 15,
   iconSize: 20,
};

export const fonts = {
   sm: 12,
   md: 15,
   lg: 18,
   family: {
      regular: 'Lato-Regular',
      bold: 'Lato-Bold',
   },
};
