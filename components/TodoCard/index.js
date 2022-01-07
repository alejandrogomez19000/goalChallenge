import React from "react";
import styles from "./TodoCardStyles";
import { Text, View } from 'react-native';
import cardStates from "../../utils/cardStates";

const TodoCard = ({ title, date, state }) =>
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <View style={[styles.dot ,state === cardStates.COMPLETED ? styles.completed : styles.todo]} />
            <Text style={styles.cardTitle}>{title}</Text>
        </View>
        
        <View>
            <Text style={styles.dateText}>{date}</Text>
        </View>
    </View>

export default TodoCard;