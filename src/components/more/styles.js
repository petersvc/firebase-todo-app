import { colors, diagram } from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
   maisArea: {
      // position: 'absolute',
      // top: diagram.margin + 4,
      // right: 16,
      zIndex: 2,
   },
   maisButton: {
      justifyContent: 'center',
      alignItems: 'center',
      // alignSelf: 'flex-end',
      // marginTop: 11,
      // marginLeft: 'auto',
      marginRight: -6,
      // marginBottom: 10, // -diagram.margin * 1.8,
      // height: 40,
      // width: 40,
      // backgroundColor: colors.bgLight,
      // borderRadius: 50,
      // elevation: 2,
      // borderColor: colors.bg,
      // borderWidth: 8,
      // display: 'none',
   },
   maisModal: {
      marginBottom: 'auto',
      marginLeft: 'auto',
      paddingBottom: diagram.padding / 2,
      paddingTop: diagram.margin,
      // paddingBottom: diagram.padding - 10,
      paddingLeft: diagram.margin,
      paddingRight: diagram.margin,
      backgroundColor: colors.bg,
      // borderBottomLeftRadius: 10,
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
