import { colors, diagram, fonts } from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  dashboard: {},
  headerTitle: {
    padding: diagram.margin,
    paddingLeft: diagram.margin * 2.5,
    // paddingTop: diagram.padding * 2,
    // paddingBottom: diagram.padding * 2,
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
    paddingTop: diagram.padding,
    paddingBottom: diagram.padding,
    alignItems: 'center',
  },
  begin: {
    fontSize: fonts.sm - 3,
  },
  timeContent: {
    flex: 0,
    marginLeft: 10,
    padding: 2,
    paddingLeft: 6,
    paddingRight: 6,
    borderWidth: 0.3,
    borderColor: colors.dim,
    borderRadius: 5,
  },
  ...general,
};

export default styles;
