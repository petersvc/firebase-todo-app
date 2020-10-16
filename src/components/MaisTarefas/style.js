import {colors, diagram} from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  maisArea: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: diagram.margin + 3, // - 10, // 136, // diagram.margin * 3.2,
    right: 23, // 16, // 22, // diagram.margin - 4,
    alignSelf: 'center',
  },
  maisButton: {
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'flex-end',
    // marginTop: 11,
    // marginLeft: 17,
    // marginRight: 2,
    // marginBottom: 10, // -diagram.margin * 1.8,
    height: 40,
    width: 40,
    // backgroundColor: colors.bgLight,
    // borderRadius: 50,
    // elevation: 2,
    // borderColor: colors.bg,
    // borderWidth: 8,
  },
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
