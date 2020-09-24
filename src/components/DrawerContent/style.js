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
  },
  lists: {
    marginTop: diagram.padding * 2,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: diagram.padding,
  },
  navigation: {
    borderTopWidth: 1,
    borderColor: colors.bgDark,
    marginTop: diagram.padding * 2,
    paddingTop: diagram.padding * 2,
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
