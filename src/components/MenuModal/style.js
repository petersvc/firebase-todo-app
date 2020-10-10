import {colors, diagram} from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  drawer: {
    flex: 1 / 1.4,
    marginTop: 'auto',
    backgroundColor: colors.bg,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: diagram.margin - 3,
    paddingRight: diagram.margin + 1,
    paddingTop: diagram.margin,
    paddingBottom: diagram.margin,
    borderBottomWidth: 1,
    borderColor: colors.bgLight,
    // backgroundColor: 'red',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: diagram.padding,
    // borderWidth: 3,
    // borderColor: colors.main,
  },
  userInfo: {
    marginLeft: -5,
  },
  lists: {
    paddingLeft: diagram.margin + 5,
    paddingRight: diagram.margin * 1.3,
    marginTop: diagram.padding * 1.5,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: diagram.padding + 5,
  },
  listName: {
    marginLeft: diagram.margin + 1,
    marginRight: 'auto',
    textTransform: 'capitalize',
  },
  navigation: {
    paddingLeft: diagram.margin,
    paddingRight: diagram.margin + 1,
    borderTopWidth: 1,
    borderColor: colors.bgLight,
    // borderBottomWidth: 1,
    // backgroundColor: 'red',
    marginTop: 8,
    paddingTop: 8,
    paddingBottom: 20,
    // marginBottom: 20,
  },
  colors: {
    orange: colors.orange,
    white: colors.white,
    yellow: colors.yellow,
    green: colors.green3,
    blue: colors.blue,
    red: colors.red,
    main: colors.main,
  },
  footer: {
    // marginTop: 'auto',
    marginBottom: diagram.margin,
    paddingLeft: diagram.margin * 1.3,
    paddingRight: diagram.margin + 1,
  },
  ...general,
};

export default styles;
