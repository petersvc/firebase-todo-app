import {colors, diagram, fonts} from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  task: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: -1,
    // flexDirection: 'row',
    marginLeft: diagram.padding, // * 1.5,
    justifyContent: 'center',
    flex: 1,
    // alignItems: 'center',
  },
  done: {
    opacity: 0.5,
    color: colors.white,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -2,
    marginLeft: 10,
    // marginLeft: 'auto',
    // width: 62,
    // height: 26,
    padding: 2,
    paddingLeft: 7,
    paddingRight: 7,
    borderWidth: 0.3,
    borderColor: colors.dim,
    borderRadius: 100,
  },
  timeInfo: {
    fontSize: fonts.sm - 2,
  },
  complete: {
    // marginLeft: 18,
    // marginRight: -4,
  },
  begin: {
    // marginLeft: 2,
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
