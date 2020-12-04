import { colors, diagram, fonts } from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
   header: {
      // justifyContent: 'center',
      // marginTop: 12,
      marginBottom: 6, // // 23,
      // margin: diagram.padding / 2,
      paddingRight: diagram.padding + 5,
      paddingLeft: diagram.padding + 2,
      paddingTop: diagram.padding / 1.4,
      paddingBottom: diagram.padding / 1.4,
      // alignItems: 'center',
      backgroundColor: colors.bg2,
      // borderRadius: 10,
      borderBottomWidth: 0.5,
      borderColor: colors.dim2,
      // marginBottom: 0,
      // elevation: 2,
      // display: 'none',
   },
   left: {
      flex: 1,
      alignItems: 'center',
      // display: 'none',
      // justifyContent: 'space-between',
      // backgroundColor: 'red',
   },
   mid: {
      flex: 1,
      opacity: 0,
   },
   right: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      // opacity: 0,
      // display: 'none',
      // backgroundColor: 'gray',
   },
   menuButton: {
      // display: 'none',
      marginLeft: 0, // -7,
      marginRight: 12,
   },
   headerTitle: {
      color: colors.white,
      fontSize: fonts.lg + 2,
      // textTransform: 'uppercase',
      // flex: 3,
      // textAlign: 'center',
      // display: 'none',
      // backgroundColor: 'blue',
      // padding: diagram.margin,
      // paddingLeft: diagram.margin - 8,
      // marginLeft: diagram.padding * 2,
      // marginRight: 'auto',
      // alignSelf: 'center',
      // paddingTop: diagram.padding * 2,
      // paddingBottom: diagram.padding * 2,
   },
   todayDate: {
      fontSize: fonts.md - 2,
      color: colors.white,
   },
   // List --------------------------

   // Task ---------------------------
   ...general,
};

export default styles;
