import { colors, diagram, fonts } from '../../styles/baseStyle';
import general from '../../styles/generalStyle';

const styles = {
  addArea: {
    position: 'absolute',
    bottom: 16,
    right: diagram.margin,
    zIndex: 2,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'flex-end',
    // marginTop: 11,
    // marginLeft: 15,
    // marginRight: diagram.margin,
    // marginBottom: diagram.padding, // -diagram.margin * 1.8,
    height: 56,
    width: 56,
    backgroundColor: colors.main,
    // borderColor: colors.bg,
    // borderWidth: 6,
    borderRadius: 30,
    elevation: 2,
  },
  addModal: {
    marginTop: 'auto',
    padding: diagram.margin,
    paddingBottom: 6,
    paddingTop: 16,
    // height: 115,
    // justifyContent: 'space-around',
    backgroundColor: colors.bg,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  addHead: {
    borderBottomWidth: 0.4,
    borderBottomColor: colors.dim2,
    paddingBottom: diagram.padding,
    marginBottom: diagram.padding,
  },
  inputTask: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskTitle: {
    flex: 1,
    marginLeft: 10,
    color: colors.dim,
    fontSize: fonts.md,
    fontFamily: fonts.family.regular,
  },
  taskDescription: {
    marginLeft: diagram.margin + 8,
    color: colors.dim,
    fontSize: fonts.md - 1,
    fontFamily: fonts.family.regular,
    paddingBottom: 10,
  },
  newTaskDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 1,
  },
  taskItem: {
    flexDirection: 'row',
    marginRight: diagram.margin,
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
  },
  // List --------------------------

  // Task ---------------------------
  ...general,
};

export default styles;
