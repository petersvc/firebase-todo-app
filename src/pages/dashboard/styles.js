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
  dateView: {
    paddingLeft: diagram.margin,
    paddingTop: diagram.padding,
    paddingBottom: diagram.padding,
    borderBottomWidth: 1,
    borderBottomColor: colors.bgLight2,
    display: 'none',
  },
  todayDate: {
    color: colors.main,
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
    // paddingBottom: diagram.padding, // + 16,
  },
  listHeader: {
    marginLeft: -1,
    paddingTop: diagram.padding - 5,
    paddingBottom: diagram.padding - 5,
    paddingLeft: diagram.margin,
    paddingRight: diagram.margin,
    borderBottomWidth: 1,
    borderBottomColor: colors.bgLight2,
    alignItems: 'center',
    // justifyContent: 'space-between',
    // display: 'none',
  },
  listName: {
    // textTransform: 'uppercase',
    fontSize: 15,
    color: colors.main,
  },
  tasksNumbers: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2, // -2,
    marginLeft: 10,
    // padding: 2,
    // paddingLeft: 6,
    // paddingRight: 6,
    // borderWidth: 1,
    // borderColor: colors.main,
    // borderRadius: 100,
    display: 'none',
    // backgroundColor: colors.main,
  },
  remaining: {
    color: colors.main,
    fontSize: fonts.sm,
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
    paddingLeft: diagram.margin,
    paddingRight: diagram.margin,
    alignItems: 'center',
    // paddingLeft: diagram.margin,
    // marginBottom: 12,
    borderBottomWidth: 1,
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
    marginTop: 4,
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
