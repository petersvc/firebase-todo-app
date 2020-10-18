import {colors, diagram} from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  maisArea: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 4, // diagram.margin + 3, // - 10, // 136, // diagram.margin * 3.2,
    right: 18, // 16, // 22, // diagram.margin - 4,
    // alignSelf: 'center',
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
    marginTop: 'auto',
    marginLeft: 'auto',
    paddingTop: diagram.margin,
    // paddingBottom: diagram.padding - 10,
    paddingLeft: diagram.margin,
    paddingRight: diagram.margin,
    backgroundColor: colors.bg,
    borderTopLeftRadius: 10,
  },
  maisItem: {
    marginBottom: diagram.padding + 3,
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