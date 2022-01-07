import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBackground,
        paddingVertical: 50,
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
    },
    dividerText: {
        color: colors.dividerText,
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 15,
    },
    divider: {
        height: .25,
        width: '100%',
        backgroundColor: colors.dividerText,
    },
    contentContainer: {
        padding: 15,
    },
    buttonContainer: {
        padding: 15,
    }
});

export default styles;
