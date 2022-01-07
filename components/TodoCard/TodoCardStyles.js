import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    borderColor: colors.gray,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.smoothBlue,
    marginVertical: 5,
  },
  completed: {
    backgroundColor: colors.whitegreen,
  },
  todo: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray
  },
  dot: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 20,
  },
  leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  cardTitle: {
      color: colors.white
  },
  dateText: {
      color: colors.gray
  }
});

export default styles;
