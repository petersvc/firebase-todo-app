import { colors, diagram } from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  footer: {
    flex: 0,
    // width: '97%',
    height: 50,
    backgroundColor: colors.bgLight,
    paddingLeft: diagram.margin,
    paddingRight: 6,
    // alignSelf: 'center',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // marginBottom: 8,
    elevation: 2,
    display: 'none',
  },
  top: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  bottom: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  // List --------------------------

  // Task ---------------------------
  ...general,
};

export default styles;
