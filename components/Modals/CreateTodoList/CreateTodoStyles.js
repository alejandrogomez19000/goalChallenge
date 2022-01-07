import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.white,
  },
  buttonContainer: {
    borderTopColor: colors.gray,
    borderTopWidth: 1,
    padding: 10,
    width: 150,
    alignItems: 'center',
  },
  closeButtonContainer: {
    position: 'absolute',
    right: 10,
    top: 30,
    fontWeight: 'bold',
  },
  content: {
    width: '100%',
  },
  input: {
    marginTop: 300,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.gray,
    borderRadius: 10,
  },
  desc: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.gray,
    borderRadius: 10,
    height: 150,
    textAlignVertical: 'top',
  },
  addDateButton: {
    padding: 10,
    borderColor: colors.black,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  addDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 300,
  },
  dateText: {
    marginLeft: 10,
    padding: 10,
  },
});

export default styles;
