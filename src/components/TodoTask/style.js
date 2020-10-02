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
    borderBottomWidth: 0.5,
    borderBottomColor: colors.bgLight2,
    // backgroundColor: colors.bgLight2,
    // borderRadius: 15,
    // marginBottom: diagram.margin,
  },
  content: {
    // marginTop: -1,
    // flexDirection: 'row',
    marginLeft: diagram.padding,
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
  times: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    // marginBottom: 5,
    // marginRight: 12,
    // marginLeft: 'auto',
    // width: 58,
    // height: 22,
    // borderWidth: 0.5,
    // borderColor: colors.opaco,
    // borderRadius: 100,
    opacity: 0.8,
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
    green2: colors.green2,
    blue: colors.blue,
    red: colors.red,
    main: colors.main,
  },
  ...general,
};

export default styles;
