import React from "react";
import styles from "./ButtonStyles";
import { Text, View, TouchableWithoutFeedback } from 'react-native';

const Button = ({ text, onClick }) =>
    <TouchableWithoutFeedback onPress={onClick} >
        <View style={styles.container}>
            <Text style={styles.buttonText}>{text}</Text>
            <View style={styles.dot} />
        </View>

    </TouchableWithoutFeedback>

export default Button;