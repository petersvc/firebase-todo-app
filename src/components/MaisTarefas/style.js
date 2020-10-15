import {colors, diagram} from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  maisModal: {
    marginBottom: 'auto',
    marginLeft: 'auto',
    paddingTop: diagram.padding,
    // paddingBottom: diagram.margin - 10,
    paddingLeft: diagram.margin,
    width: 165,
    backgroundColor: colors.bg,
    borderBottomLeftRadius: 10,
  },
  maisItem: {
    marginBottom: diagram.margin,
  },
  colors: {
    orange: colors.orange,
    white: colors.white,
    green: colors.green,
    dim: colors.dim,
    dim2: colors.dim2,
    blue: colors.blue,
    red: colors.red,
    main: colors.main,
  },
  ...general,
};

export default styles;
