import React, { useState } from 'react';
import styles from './CreateTodoStyles';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const CreateTodoList = ({ isVisible, onSubmit, onClose, isAddItem }) => {
    const [textTitle, setTextTitle] = useState('');
    const [descText, setDescText] = useState('');
    const [date, setDate] = useState("");
    const [showDate, setShowDate] = useState(false);

    const onDateChange = (val) => {        
        setShowDate(false);
        setDate(moment(val).format("MMM Do YY"));
    }
    const onChangeText = text => {
        setTextTitle(text);
    };
    const onChangeDesc = text => {
        setDescText(text);
    };
    const handleCreateList = () => {
        if (isAddItem) {
            onSubmit(textTitle, descText, date);
            setDescText("");
        } else {
            onSubmit(textTitle);
        }
        setTextTitle("");
    };

    const closeModal = () => {
        onClose();
        setTextTitle("");
        isAddItem && setDescText("");
    }

    const handleAddDate = () => {
        setShowDate(true);
    };

    const hideDateModal = () => {
        setShowDate(false);
    }

    return (
        <View style={styles.container}>
            <Modal isVisible={isVisible}>
                <View style={styles.contentContainer}>
                    <View style={styles.content}>
                        <TouchableOpacity onPress={closeModal}>
                            <View style={styles.closeButtonContainer}>
                                <Text>X</Text>
                            </View>
                        </TouchableOpacity>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={textTitle}
                            placeholder="Title"
                        />
                        {isAddItem && (
                            <TextInput
                                style={styles.desc}
                                onChangeText={onChangeDesc}
                                value={descText}
                                placeholder="Description"
                                multiline
                                numberOfLines={5}
                            />
                        )}
                    </View>
                    
                    {isAddItem && <View>
                        <TouchableOpacity style={styles.addDateContainer} onPress={handleAddDate}>
                            <View style={styles.addDateButton}>
                                <Text>AddDate</Text>
                            </View>
                            <Text style={styles.dateText}>{date}</Text>
                        </TouchableOpacity> 
                    </View>}

                    <TouchableOpacity onPress={handleCreateList}>
                        <View style={styles.buttonContainer}>
                            <Text>{isAddItem ? 'Add Item' : 'Create List'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <DateTimePickerModal
                    isVisible={showDate}
                    mode={"date"}
                    onConfirm={onDateChange}
                    onCancel={hideDateModal}
                />
            </Modal>
              
            
        </View>
    );
};

export default CreateTodoList;
