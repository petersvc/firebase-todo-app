import { colors, diagram, fonts } from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
   header: {
      // justifyContent: 'center',
      // marginTop: 12,
      marginBottom: 16, // // 23,
      // margin: diagram.padding,
      paddingRight: diagram.padding + 5,
      paddingLeft: diagram.padding + 3, // * 3, // + 2,
      paddingTop: diagram.padding / 1.2,
      paddingBottom: diagram.padding / 1.6,
      // backgroundColor: colors.bgLight2,
      alignItems: 'center',
      // borderRadius: 100,
      // borderBottomLeftRadius: 15,
      // borderBottomRightRadius: 15,
      // borderBottomWidth: 0.6,
      borderColor: colors.bgLight2,
      // marginBottom: 0,
      // elevation: 2,
      // display: 'none',
   },
   mid: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   left: {
      flex: 2,
      alignItems: 'center',
      // justifyContent: 'flex-start',
      // backgroundColor: 'red',
   },
   right: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      // backgroundColor: 'gray',
   },
   menuButton: {
      marginLeft: 0, // -7,
   },
   headerTitle: {
      // textTransform: 'uppercase',
      color: colors.white,
      fontSize: fonts.lg,
      // display: 'none',
      // flex: 3,
      // textAlign: 'center',
      // backgroundColor: 'blue',
      // padding: diagram.margin,
      // paddingLeft: diagram.margin - 8,
      // marginRight: 'auto',
      // alignSelf: 'center',
      // paddingTop: diagram.padding * 2,
      // paddingBottom: diagram.padding * 2,
   },

   // List --------------------------

   // Task ---------------------------
   ...general,
};

export default styles;
