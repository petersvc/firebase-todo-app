import {colors, diagram, fonts} from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  tagModal: {
    // flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '75%',
    height: 250,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: colors.bg,
    paddingLeft: diagram.margin * 2,
    paddingRight: diagram.margin + 1,
    borderRadius: 10,
  },
  tagItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  taskTitle: {
    marginLeft: 12,
    color: colors.white,
    fontSize: fonts.lg + 2,
    textTransform: 'capitalize',
    fontWeight: 'bold',
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
