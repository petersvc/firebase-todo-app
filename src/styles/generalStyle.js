import {colors, fonts} from './baseStyle';

const general = {
  title: {
    color: colors.white,
    fontSize: fonts.md,
    fontFamily: fonts.family.regular,
    // textTransform: 'capitalize',
  },
  titleSpoted: {
    color: colors.main,
    fontSize: fonts.md + 2,
    fontFamily: fonts.family.bold,
    // fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  sectionTitle: {
    color: colors.white,
    fontSize: fonts.lg + 2,
    fontFamily: fonts.family,
    // textTransform: 'capitalize',
    // fontWeight: 'bold',
  },
  numbersSm: {
    color: colors.dim,
    fontSize: fonts.sm,
    fontFamily: fonts.family.regular, // 'Lato-Medium',
  },
  numbers: {
    color: colors.white,
    fontSize: fonts.md - 1,
    fontFamily: fonts.family.regular, // 'Lato-Medium',
    // textTransform: 'capitalize',
  },
  smallText: {
    color: colors.white,
    fontSize: fonts.sm - 2,
    fontFamily: fonts.family.regular,
  },
  smallText2: {
    color: colors.icon,
    fontSize: fonts.sm,
    fontFamily: fonts.family.regular,
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
