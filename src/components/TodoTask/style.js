import {colors, diagram} from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  task: {
    flex: 1 / 2,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // width: 160,
    // height: 130,
    paddingTop: diagram.padding,
    paddingBottom: diagram.padding,
    paddingLeft: diagram.margin - 2,
    paddingRight: diagram.margin + 1,
    marginLeft: 6,
    marginRight: 6,
    borderWidth: 0.3,
    borderColor: colors.dim,
    borderRadius: 10,
    marginBottom: diagram.margin,
    // backgroundColor: colors.bgLight2,
  },
  content: {
    marginTop: 1,
    // flexDirection: 'row',
    // marginLeft: diagram.padding, // * 1.5,
    justifyContent: 'space-between',
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
  taskBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    justifyContent: 'space-between',
  },
  contentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 5,
    marginRight: 18,
    // marginLeft: 'auto',
    // justifyContent: 'center',
    // width: 62,
    // height: 26,
    // padding: 4,
    // paddingLeft: 8,
    // paddingRight: 8,
    // borderWidth: 0.3,
    // borderColor: colors.dim,
    // borderRadius: 100,
    // opacity: 0.8,
  },
  complete: {
    // display: 'none',
    // marginLeft: 18,
    marginRight: -6,
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
