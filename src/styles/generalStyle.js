import { colors, fonts } from './baseStyle';

const general = {
   verticalContainer: {
      flex: 1,
      // backgroundColor: colors.bg,
   },
   horizontalContainer: {
      // flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      // backgroundColor: colors.bg,
   },
   title: {
      color: colors.white,
      fontSize: fonts.md,
      fontFamily: fonts.family.regular,
      letterSpacing: -0.5,
      // textTransform: 'capitalize',
   },
   titleSpoted: {
      color: colors.main,
      fontSize: fonts.md + 1,
      fontFamily: fonts.family.bold,
      textTransform: 'capitalize',
      letterSpacing: -0.5,
   },
   sectionTitle: {
      color: colors.white,
      fontSize: fonts.lg,
      fontFamily: fonts.family.bold,
      letterSpacing: -0.5,
      // textTransform: 'uppercase',
   },
   numbersSm: {
      color: colors.white,
      fontSize: fonts.sm,
      fontFamily: fonts.family.regular, // 'Lato-Medium',
      letterSpacing: -0.5,
   },
   numbers: {
      color: colors.white,
      fontSize: fonts.md - 1,
      fontFamily: fonts.family.regular, // 'Lato-Medium',
      letterSpacing: -0.5,
      // textTransform: 'capitalize',
   },
   smallText: {
      color: colors.white,
      fontSize: fonts.sm - 2,
      fontFamily: fonts.family.regular,
      letterSpacing: -0.5,
   },
   smallText2: {
      color: colors.icon,
      fontSize: fonts.sm,
      fontFamily: fonts.family.regular,
      letterSpacing: -0.5,
      textTransform: 'capitalize',
   },
   icon: {
      size: 18,
      color: colors.icon,
      colorMain: colors.main,
      colorDark: colors.bg,
   },
   statusBar: {
      color: 'red',
   },
};

export default general;
