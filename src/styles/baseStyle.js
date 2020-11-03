import { Dimensions } from 'react-native';

export const dimensions = {
   fullHeight: Dimensions.get('window').height,
   fullWidth: Dimensions.get('window').width,
};

export const colors = {
   black: 'rgba(28, 33, 36, 1)',
   black2: 'rgba(32, 37, 40, 1)',
   blackDimmed: 'rgba(35, 40, 44, 1)',
   blackDimmed2: 'rgba(40, 45, 49, 1)',
   blackDimmed3: 'rgba(55, 60, 64, 1)',
   bgDark: 'rgba(15, 20, 24, 1)',
   icon: 'rgba(200, 200, 200, 1)',
   dim: 'rgba(160, 160, 160, 1)', // 'rgba(102, 119, 135, 1)',
   dim2: 'rgba(75, 75, 75, 1)',
   white: 'rgb(220,220,220)', // 'rgba(142, 159, 175, 1)',
   yellow: 'rgb(255, 170, 46)',
   orange: 'rgb(245, 96, 98)', // 'rgb(255, 172, 101)',
   orangeBg: 'rgba(255, 126, 108, 0.1)', // 'rgb(46, 43, 41)',
   blue: 'rgb(64, 132, 239)', // 'rgba(0, 165, 208, 1)', // 'rgba(73, 101, 255, 1)',
   blueBg: 'rgba(64, 132, 239, 0.05)',
   blue2: 'rgb(178, 193, 251)', // 'rgb(198, 223, 251)',
   blue3: 'rgb(142, 159, 195)',
   darkBlue: 'rgb(62, 71, 90)',
   darkBlue2: 'rgb(54, 64, 79)',
   purple: 'rgba(172, 105, 254, 1)', // 'rgba(106, 50, 223, 1)', // 'rgba(146, 61, 250, 1)',
   purple2: 'rgb(32, 32, 43)',
   purple3: 'rgb(39, 39, 52)',
   purpleBg: 'rgba(176,153,204, 0.1)',
   green: 'rgb(190, 232, 205)', // 'rgb(139, 204, 180)', //
   greenBg: 'rgba(199, 232, 216, 0.05)', // 'rgba(0, 255, 102, 0.05)', // 'rgba(35, 45, 47, 1)',
   red: 'rgb(255, 106, 118)', // 'rgba(255, 60, 86, 1)', //
   red2: 'rgb(247, 165, 165)',
   redBg: 'rgba(255, 60, 86, 0.05)',
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

colors.main = colors.blue3;
colors.mainAlt = colors.blue2;
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
   md: 14,
   lg: 17,
   family: {
      regular: 'Lato-Regular',
      bold: 'Lato-Black',
   },
};
