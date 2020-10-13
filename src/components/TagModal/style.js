import {colors, diagram} from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  tagModal: {
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '75%',
    height: 240,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: colors.bg,
    paddingLeft: diagram.margin * 2,
    paddingRight: diagram.margin + 1,
    borderRadius: 20,
  },
  tagItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
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
