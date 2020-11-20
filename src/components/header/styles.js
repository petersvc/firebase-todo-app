import { colors, diagram, fonts } from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
   header: {
      // justifyContent: 'center',
      // marginTop: 12,
      marginBottom: 16, // // 23,
      // margin: diagram.padding,
      paddingRight: diagram.padding + 5,
      paddingLeft: diagram.padding + 2,
      paddingTop: diagram.padding / 1.3,
      paddingBottom: diagram.padding / 1.3,
      // alignItems: 'center',
      backgroundColor: colors.bgLight2,
      // borderRadius: 100,
      // borderBottomWidth: 0.6,
      borderColor: colors.bgLight2,
      // marginBottom: 0,
      // elevation: 2,
      // display: 'none',
   },
   left: {
      flex: 1,
      alignItems: 'center',
      // justifyContent: 'space-between',
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
      color: colors.white,
      fontSize: fonts.md + 2,
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
