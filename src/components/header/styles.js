import { colors, diagram } from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  header: {
    flex: 0,
    justifyContent: 'space-between',
    height: 58,
    backgroundColor: colors.bgLight,
    paddingLeft: diagram.margin,
    paddingRight: 6,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.bgLight2,
    marginBottom: 0,
    // elevation: 2,
    // display: 'none',
  },
  menuButton: {
    marginLeft: -3, // -7,
  },
  headerTitle: {
    padding: diagram.margin,
    paddingLeft: diagram.margin - 8,
    marginRight: 'auto',
    // alignSelf: 'center',
    // paddingTop: diagram.padding * 2,
    // paddingBottom: diagram.padding * 2,
  },

  // List --------------------------

  // Task ---------------------------
  ...general,
};

export default styles;