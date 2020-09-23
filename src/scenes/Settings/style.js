import {colors, diagram} from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  settings: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bg,
    paddingLeft: diagram.margin,
    paddingRight: diagram.margin + 1,
    // elevation: 2,
  },
  ...general,
};

export default styles;
