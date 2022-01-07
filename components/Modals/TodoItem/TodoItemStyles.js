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
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: "absolute",
    bottom: 10,
    backgroundColor: colors.white
  },
  buttonText: {
    color: colors.violet,
    padding: 15,
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 10,
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
  informationContainer: {
    marginTop: 100,
  },
  textInformation: {
    marginVertical: 10,
    marginBottom: 50,
  },
  textInformationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    height: 0.25,
    width: '100%',
    backgroundColor: colors.dividerText,
  },
  desc: {
    marginVertical: 15,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.gray,
    borderRadius: 10,
    height: 150,
    textAlignVertical: 'top',
  },
  title: {
    marginVertical: 15,
    borderWidth: 1,
    padding: 15,
    borderColor: colors.gray,
    borderRadius: 10,
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
    marginVertical: 15,
  },
  dateText: {
    marginLeft: 10,
    padding: 10,
  },
  goalItemContainer: {
    marginVertical: 2.5,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  entriesContainer: {
    marginTop: 15,
  },
  addProgress: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  addProgressTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  saveButton: {
    padding: 15,
  },
  progressTitle: {
    flex: 1,
  }
});

export default styles;
