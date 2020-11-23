import { colors, diagram, fonts } from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
   addArea: {
      position: 'absolute',
      bottom: 16,
      right: diagram.padding + 3,
      // alignSelf: 'center',
      // elevation: 3,
      zIndex: 6,
   },
   addButton: {
      justifyContent: 'center',
      alignItems: 'center',
      // padding: 10,
      // paddingLeft: 30,
      // paddingRight: 30,
      backgroundColor: colors.main,
      // width: 140,
      // borderWidth: 0.8,
      // borderStyle: 'dashed',
      // borderColor: colors.main,
      width: 48,
      height: 48,
      borderRadius: 150,
      zIndex: 3,
      // elevation: 3,
   },
   addModal: {
      marginTop: 'auto',
      // padding: diagram.margin,
      paddingBottom: 6,
      paddingTop: 16,
      // height: 115,
      // justifyContent: 'space-around',
      backgroundColor: colors.bg,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
   },
   addHead: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 0.4,
      borderBottomColor: colors.dim2,
      paddingTop: diagram.padding / 2,
      paddingBottom: diagram.padding * 1.3,
      marginBottom: diagram.padding,
      paddingLeft: diagram.margin,
      paddingRight: diagram.margin,
   },
   inputTask: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   taskTitle: {
      flex: 1,
      // marginLeft: diagram.padding,
      // height: 42,
      padding: 0,
      color: colors.dim,
      fontSize: fonts.lg,
      // fontFamily: fonts.family.regular,
      // backgroundColor: 'red',
   },
   taskDescription: {
      padding: 0,
      color: colors.dim,
      fontSize: fonts.md - 2,
      // fontFamily: fonts.family.regular,
      // backgroundColor: 'blue',
      // paddingBottom: 10,
   },
   newTaskDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      paddingLeft: diagram.margin + 2,
      paddingRight: diagram.margin + 2,
   },
   taskItem: {
      flexDirection: 'row',
      marginRight: diagram.margin * 1.5,
      justifyContent: 'space-around',
      alignItems: 'center',
      // paddingLeft: diagram.margin - 10,
      // paddingRight: diagram.margin - 10,
      // padding: 7,
      // borderWidth: 0.3,
      // borderColor: colors.dim,
      // borderRadius: 100,
   },
   taskSend: {
      marginLeft: 'auto',
      // marginRight: -2,
   },
   // List --------------------------

   // Task ---------------------------
   ...general,
};

export default styles;
