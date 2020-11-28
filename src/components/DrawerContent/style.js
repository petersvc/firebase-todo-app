import { colors, diagram } from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
   drawer: {
      flex: 1,
      backgroundColor: colors.bg,
   },
   user: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: diagram.margin - 4,
      paddingRight: diagram.margin + 1,
      paddingTop: diagram.margin / 2,
      paddingBottom: diagram.margin,
      borderBottomWidth: 1,
      borderColor: colors.bgLight3,
      // backgroundColor: 'red',
   },
   avatar: {
      width: 40,
      height: 40,
      borderRadius: 100,
      marginRight: diagram.padding,
      // padding: 20,
      // borderWidth: 2,
      // borderColor: colors.mainAlt,
   },
   userInfo: {
      marginLeft: 3,
   },
   lists: {
      paddingLeft: diagram.margin + 4,
      paddingRight: diagram.margin + 4,
      marginTop: diagram.padding * 1.5,
      marginBottom: diagram.padding - 10,
      borderBottomWidth: 1,
      borderColor: colors.bgLight3,
   },
   listHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: diagram.padding * 2,
   },
   listName: {
      marginLeft: diagram.margin + 11,
      marginRight: 'auto',
      textTransform: 'capitalize',
   },
   navigation: {
      // flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: diagram.margin * 1.2,
      paddingRight: diagram.margin * 1.3,
      borderTopWidth: 1,
      // borderColor: colors.red,
      borderBottomWidth: 1,
      marginTop: 18,
      paddingTop: diagram.margin,
      paddingBottom: 8,
      // marginBottom: 20,
   },
   navItem: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: 20,
   },
   itemName: {
      marginLeft: 5,
   },
   colors: {
      orange: colors.orange,
      white: colors.white,
      yellow: colors.yellow,
      dim: colors.dim,
      green: colors.green3,
      blue: colors.blue,
      red: colors.red,
      main: colors.main,
   },
   footer: {
      // marginTop: 'auto', // diagram.margin,
      // marginBottom: diagram.margin,
      paddingTop: diagram.padding + 8,
      paddingLeft: diagram.margin + 6,
      paddingRight: diagram.margin + 6,
      borderTopWidth: 1,
      borderColor: colors.bgLight3,
   },
   ...general,
};

export default styles;
