import { colors, diagram } from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
   footer: {
      justifyContent: 'space-between',
      // marginTop: 12,
      // marginBottom: 0, // // 23,
      alignSelf: 'center',
      // margin: diagram.padding / 2,
      width: '100%',
      height: 52,
      backgroundColor: colors.bgLight2,
      alignItems: 'center',
      // borderRadius: 100,
      // elevation: 2,
      paddingLeft: diagram.margin,
      paddingRight: diagram.margin,
      // borderBottomLeftRadius: 15,
      // borderBottomRightRadius: 15,
      // borderBottomWidth: 0.6,
      // borderColor: colors.bgLight2,
      // marginBottom: 0,
      display: 'none',
   },
   footerItem: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 35,
      height: 35,
      borderRadius: 100,
      // backgroundColor: colors.bgLight3,
   },
   ...general,
};

export default styles;
