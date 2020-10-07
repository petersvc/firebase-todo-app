import {colors, diagram, fonts} from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  login: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.main,
  },
  top: {
    flex: 1.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'rgba(134, 193, 202, 1)',
  },
  loginImg: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(134, 93, 202, 1)',
    // borderRadius: 100,
    // borderWidth: 2,
    // borderColor: 'red',
  },
  bottom: {
    flex: 1,
    // justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'rgba(134, 193, 202, 1)',
  },
  welcome: {
    marginTop: diagram.margin,
    color: colors.white,
    fontSize: fonts.lg + 3,
    textTransform: 'capitalize',
    // fontWeight: 'bold',
  },
  textItem: {
    marginLeft: diagram.margin * 3,
    marginRight: diagram.margin * 3,
    marginTop: diagram.margin,
    color: colors.white,
    textAlign: 'center',
    // fontWeight: 'bold',
  },
  loginBtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 140,
    height: 44,
    marginTop: 28,
    borderRadius: 100,
    backgroundColor: colors.white,
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
