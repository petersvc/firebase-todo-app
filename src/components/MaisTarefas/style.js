import {colors, diagram} from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  maisModal: {
    marginBottom: 'auto',
    marginLeft: 'auto',
    paddingTop: diagram.margin,
    paddingBottom: diagram.margin - 10,
    paddingLeft: diagram.margin * 1.3,
    width: 180,
    backgroundColor: colors.bg,
    borderBottomLeftRadius: 15,
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
