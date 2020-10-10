import {colors, fonts} from './baseStyle';

const general = {
  title: {
    color: colors.white,
    fontSize: fonts.md,
    // textTransform: 'capitalize',
  },
  titleSpoted: {
    color: colors.main,
    fontSize: fonts.lg,
    // textTransform: 'uppercase',
    // textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: colors.white,
    fontSize: fonts.lg + 2,
    // textTransform: 'capitalize',
    // fontWeight: 'bold',
  },
  smallText: {
    color: colors.white,
    fontSize: fonts.sm,
  },
  smallText2: {
    color: colors.icon,
    fontSize: fonts.sm,
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
