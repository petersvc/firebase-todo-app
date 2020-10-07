import {colors, diagram} from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  drawer: {
    flex: 1,
    paddingLeft: diagram.margin,
    paddingRight: diagram.margin + 1,
    backgroundColor: colors.bg,
    // justifyContent: 'space-between',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: diagram.margin,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: diagram.padding,
    // borderWidth: 3,
    // borderColor: colors.main,
  },
  lists: {
    marginTop: diagram.padding * 2,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: diagram.padding + 5,
  },
  navigation: {
    borderTopWidth: 1,
    borderColor: colors.bgLight2,
    borderBottomWidth: 1,
    // backgroundColor: 'red',
    marginTop: 8,
    paddingTop: 8,
    paddingBottom: 20,
    marginBottom: 20,
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
    marginTop: 'auto',
    marginBottom: diagram.margin,
  },
  ...general,
};

export default styles;
