import { colors, diagram, fonts } from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
   dashboard: {
      backgroundColor: colors.bg,
   },
   headerTitle: {
      padding: diagram.margin,
      // paddingLeft: diagram.margin * 2.6,
      // display: 'none',
      // alignSelf: 'center',
      // paddingTop: diagram.padding * 2,
      // paddingBottom: diagram.padding * 2,
   },
   dateView: {
      paddingLeft: diagram.margin,
      paddingTop: diagram.padding,
      // paddingBottom: diagram.padding,
      // borderBottomWidth: 1,
      // borderBottomColor: colors.bgLight2,
      // display: 'none',
   },
   todayDate: {
      color: colors.white,
      fontSize: 25,
   },
   menuButton: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      left: diagram.margin,
      bottom: 16,
      height: 50,
      width: 50,
      backgroundColor: colors.bgLight2,
      borderRadius: 30,
      elevation: 2,
      // display: 'none',
   },

   // List --------------------------

   list: {
      // paddingBottom: diagram.padding, // + 16,
      // borderBottomWidth: 1,
      // borderBottomColor: colors.bgLight2,
   },
   listHeader: {
      paddingTop: 8,
      paddingBottom: 8,
      // marginTop: 12,
      // marginBottom: 12,
      paddingLeft: diagram.margin,
      paddingRight: diagram.margin - 5,
      // backgroundColor: colors.black2,
      // borderBottomWidth: 1,
      borderBottomColor: colors.bgLight2,
      alignItems: 'center',
   },
   listName: {
      // textTransform: 'uppercase',
      // marginLeft: diagram.padding + 1,
      fontSize: 14,
      color: colors.dim,
   },
   tasksNumbers: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 2, // -2,
      marginLeft: 12,
      // padding: 2,
      // paddingLeft: 6,
      // paddingRight: 6,
      // borderWidth: 1,
      // borderColor: colors.main,
      // borderRadius: 100,
      // display: 'none',
      // backgroundColor: colors.main,
   },
   remaining: {
      marginTop: -1,
      // marginLeft: 'auto', // 5,
      color: colors.dim,
      fontSize: fonts.sm,
      fontFamily: fonts.family.bold,
      // letterSpacing: 1,
   },
   separator: {
      // alignSelf: 'center',
      width: 30,
      height: 0.4,
      backgroundColor: colors.dim,
      borderRadius: 100,
      marginTop: diagram.padding,
      marginBottom: diagram.padding / 2,
      display: 'none',
   },

   // Task ---------------------------

   todo: {
      alignItems: 'center',
      paddingTop: diagram.padding,
      paddingBottom: diagram.padding,
      // paddingLeft: 12,
      // paddingRight: 12,
      marginLeft: diagram.margin,
      marginRight: diagram.margin,
      // paddingLeft: diagram.margin,
      // marginBottom: 8,
      // borderBottomWidth: 1,
      // borderColor: colors.bgLight2,
      // borderRadius: 10,
      // elevation: 2,
      // backgroundColor: colors.bg2,
   },
   details: {
      marginLeft: 8,
      flexDirection: 'row',
      // flex: 1,
      // justifyContent: 'space-between',
      alignItems: 'center',
      // marginTop: 5,
      // width: 38,
      backgroundColor: colors.bgLight2,
      padding: 2,
      paddingLeft: 6,
      paddingRight: 6,
      // borderWidth: 0.3,
      borderColor: colors.dim,
      borderRadius: 5,
   },
   tag: {
      display: 'none',
   },
   time: {
      // marginLeft: diagram.padding * 2,
   },
   begin: {
      // marginLeft: 5,
      fontSize: fonts.sm - 3,
   },
   ...general,
};

export default styles;
