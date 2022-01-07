import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 25,
  
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 10,
    paddingLeft: 20,
    backgroundColor: colors.buttonBackground,
    marginVertical: 5,
  },
  dot: {
    height: 35,
    width: 35,
    borderRadius: 17.5,
    backgroundColor: colors.violet
  },
  buttonText: {
      color: colors.white,
      fontSize: 16
  }
});

export default styles;
