import {colors, diagram} from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  task: {
    flex: 1 / 2,
    flexDirection: 'row',
    // alignItems: 'center',
    // width: 160,
    justifyContent: 'space-between',
    // height: 115,
    padding: diagram.padding,
    paddingLeft: diagram.margin - 2,
    paddingRight: diagram.margin - 2,
    marginLeft: 6,
    marginRight: 6,
    borderWidth: 0.4,
    borderColor: colors.dim,
    borderRadius: 10,
    marginBottom: diagram.margin,
    // backgroundColor: colors.bgLight2,
  },
  taskLeft: {
    width: '90%',
    justifyContent: 'space-between',
  },
  taskRight: {
    marginTop: -1,
    justifyContent: 'flex-end',
    // marginLeft: 'auto',
    // opacity: 0,
    // alignItems: 'center',
  },
  contentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 5,
    // marginRight: 18,
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
    // backgroundColor: 'red',
  },
  begin: {
    // marginLeft: 2,
  },
  done: {
    opacity: 0.5,
    color: colors.white,
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
