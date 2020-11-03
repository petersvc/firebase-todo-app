import { colors, diagram } from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
   header: {
      // justifyContent: 'center',
      // paddingTop: diagram.padding,
      // paddingBottom: diagram.padding / 2,
      // paddingLeft: diagram.margin,
      // paddingRight: diagram.margin - 5,
      marginTop: 12,
      marginBottom: 0,
      margin: diagram.padding,
      paddingRight: diagram.padding,
      paddingLeft: diagram.padding,
      padding: 15,
      // alignItems: 'center',
      backgroundColor: colors.bgLight,
      borderRadius: 10,
      // borderBottomWidth: 1,
      // borderBottomColor: colors.bgLight2,
      // marginBottom: 0,
      elevation: 2,
      // display: 'none',
   },
   left: {
      flex: 5,
      alignItems: 'center',
      // justifyContent: 'space-between',
      // backgroundColor: 'red',
   },
   right: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      // backgroundColor: 'gray',
   },
   menuButton: {
      // marginLeft: -2, // -7,
   },
   headerTitle: {
      // flex: 3,
      // textAlign: 'center',
      // display: 'none',
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
