import {colors, diagram, fonts} from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  task: {
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    paddingTop: diagram.padding,
    paddingBottom: diagram.padding,
    paddingLeft: diagram.margin,
    paddingRight: diagram.margin + 1,
    // borderTopWidth: 0.5,
    // borderTopColor: colors.bgLight2,
    // borderBottomWidth: 0.5,
    // borderBottomColor: colors.bgLight2,
    // backgroundColor: colors.bgLight2,
    // borderRadius: 15,
    // marginBottom: diagram.margin,
  },
  content: {
    flexDirection: 'row',
    marginTop: 1,
    marginLeft: diagram.padding, // * 1.5,
    // justifyContent: 'center',
    flex: 1,
    // backgroundColor: 'red',
  },

  firstLine: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  repeat: {
    marginLeft: 16,
  },
  contentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 8,
    // justifyContent: 'center',
    marginLeft: 10,
    // marginLeft: 'auto',
    // width: 62,
    // height: 26,
    padding: 2, // 4,
    paddingLeft: 6, // 8,
    paddingRight: 6, // 8,
    borderWidth: 0.3,
    borderColor: colors.dim,
    borderRadius: 100,
  },
  complete: {
    // marginLeft: 18,
    // marginRight: -4,
  },
  done: {
    opacity: 0.5,
    color: colors.white,
  },
  begin: {
    fontSize: fonts.sm - 3,
  },
  taskDescription: {
    marginTop: 5,
    color: colors.dim,
    fontSize: fonts.md - 1,
    fontFamily: fonts.family.regular,
    display: 'none',
  },
  colors: {
    orange: colors.orange,
    white: colors.white,
    green: colors.green,
    dim: colors.dim,
    dim2: colors.dim2,
    blue: colors.blue,
    red: colors.red,
    main: colors.main,
  },
  ...general,
};

export default styles;
