import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    paddingTop: 50,
    padding: 15,
  },
  dot: {
    height: 35,
    width: 35,
    borderRadius: 17.5,
    backgroundColor: colors.violet,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
  dividerText: {
    color: colors.dividerText,
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 15,
  },
  divider: {
    height: 0.25,
    width: '100%',
    backgroundColor: colors.dividerText,
    marginBottom: 20,
  },
  contentContainer: {
    padding: 15,
  },
  buttonContainer: {
    padding: 15,
  },
  addListButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.smoothBlue,
  },
  addButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoListItem: {
    height: 50,
    backgroundColor: colors.smoothBlue,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  todoListItemText: {
    color: colors.gray,
  },
});

export default styles;
