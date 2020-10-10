import {colors, diagram} from '../../styles/baseStyle';
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
    // marginTop: 3,
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
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 5,
    marginRight: 18,
    // marginLeft: 'auto',
    // justifyContent: 'center',
    // width: 62,
    // height: 26,
    // padding: 5,
    // paddingLeft: 10,
    // paddingRight: 10,
    // borderWidth: 0.5,
    // borderColor: colors.opaco,
    // borderRadius: 100,
    // opacity: 0.8,
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
    blue: colors.blue,
    red: colors.red,
    main: colors.main,
  },
  ...general,
};

export default styles;
