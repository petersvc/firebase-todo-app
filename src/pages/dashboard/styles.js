import { colors, diagram, fonts } from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  dashboard: {
    backgroundColor: colors.bg,
  },
  headerTitle: {
    padding: diagram.margin,
    paddingLeft: diagram.margin * 2.6,
    display: 'none',
    // alignSelf: 'center',
    // paddingTop: diagram.padding * 2,
    // paddingBottom: diagram.padding * 2,
  },
  menuButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: diagram.margin,
    bottom: 12,
    height: 48,
    width: 48,
    backgroundColor: colors.bgLight,
    borderRadius: 30,
    elevation: 2,
    display: 'none',
  },

  // List --------------------------

  list: {
    paddingLeft: diagram.margin,
    paddingRight: diagram.margin,
    // paddingBottom: diagram.padding, // + 16,
  },
  listHeader: {
    marginLeft: -1,
    paddingBottom: diagram.padding,
    display: 'none',
  },
  tasksNumbers: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -2,
    marginLeft: 10,
    padding: 2,
    paddingLeft: 6,
    paddingRight: 6,
    borderWidth: 1,
    borderColor: colors.main,
    borderRadius: 100,
    display: 'none',
    // backgroundColor: colors.main,
  },
  remaining: {
    color: colors.main,
    fontSize: fonts.sm - 2,
    fontFamily: fonts.family.bold,
    // letterSpacing: 1,
  },
  separator: {
    // alignSelf: 'center',
    width: 30,
    height: 0.4,
    backgroundColor: colors.dim,
    borderRadius: 100,
    marginTop: diagram.padding,
    marginBottom: diagram.padding / 2,
    display: 'none',
  },

  // Task ---------------------------

  todo: {
    paddingTop: diagram.padding - 3,
    paddingBottom: diagram.padding - 3,
    alignItems: 'flex-start',
    // paddingLeft: diagram.margin,
    // marginBottom: 12,
    borderBottomWidth: 0.8,
    borderBottomColor: colors.bgLight2,
    // borderRadius: 13,
    // backgroundColor: colors.bgLight,
  },
  begin: {
    fontSize: fonts.sm,
  },
  timeContent: {
    // flexDirection: 'row',
    // flex: 1,
    marginTop: 5,
    // width: 80,
    // padding: 2,
    // paddingLeft: 6,
    // paddingRight: 6,
    // borderWidth: 0.3,
    // borderColor: colors.dim,
    // borderRadius: 5,
  },
  ...general,
};

export default styles;
