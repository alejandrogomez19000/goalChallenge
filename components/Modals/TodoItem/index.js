import React, {useEffect, useState} from 'react';
import styles from './TodoItemStyles';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import goalStates from '../../../utils/goalStates';

const TodoItemModal = ({
  isVisible,
  onEdit,
  onComplete,
  onDelete,
  onClose,
  data,
  startGoal,
  addNewProgress,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [textTitle, setTextTitle] = useState('');
  const [descText, setDescText] = useState('');
  const [date, setDate] = useState('');
  const [taskState, setTaskState] = useState('');
  const [newProgressTitle, setNewProgressTitle] = useState('');
  const [addProgress, setAddProgress] = useState(false);

  const [showDate, setShowDate] = useState(false);

  useEffect(() => {
    setTextTitle(data.title);
    setDescText(data.description);
    setDate(data.date);
    setTaskState(data.state);
  }, [data]);

  const onDateChange = val => {
    setShowDate(false);
    setDate(moment(val).format('MMM Do YY'));
  };

  const closeModal = () => {
    onClose();
  };

  const handleEditMode = () => {
    setEditMode(true);
  };

  const onChangeTitle = text => {
    setTextTitle(text);
  };

  const onChangeNewProgress = text => {
    setNewProgressTitle(text);
  };

  const onChangeDesc = text => {
    setDescText(text);
  };

  const handleFinishEdit = () => {
    setEditMode(false);
    onEdit({title: textTitle, description: descText, date, state: taskState, progressEntries: data.progressEntries});
  };

  const handleAddDate = () => {
    setShowDate(true);
  };

  const hideDateModal = () => {
    setShowDate(false);
  };

  const handleAddNewProgress = () => {
    setAddProgress(true);
  };

  const renderGoalEntries = ({item}) => (
    <View style={styles.goalItemContainer}>
      <Text style={styles.goalText}>- {item.title}</Text>
      <Text style={styles.goalTextDate}>{item.date}</Text>
    </View>
  );

  const saveNewProgress = () => {
    addNewProgress({
      title: newProgressTitle,
      date: moment(new Date()).format('MMM Do YY'),
    });
    setAddProgress(false);
    setNewProgressTitle('');
  };

  const stateText = {
    [goalStates.CREATED]: 'Created',
    [goalStates.IN_PROGRESS]: 'In Progress',
    [goalStates.COMPLETED]: 'Completed',
  };

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
            <View style={styles.informationContainer}>
              <Text style={styles.textInformationTitle}>Title</Text>
              <View style={styles.divider} />
              {editMode ? (
                <TextInput
                  style={styles.title}
                  onChangeText={onChangeTitle}
                  value={textTitle}
                  placeholder="Title"
                />
              ) : (
                <Text style={styles.textInformation}>{textTitle}</Text>
              )}

              <Text style={styles.textInformationTitle}>Description</Text>
              <View style={styles.divider} />

              {editMode ? (
                <TextInput
                  style={styles.desc}
                  onChangeText={onChangeDesc}
                  value={descText}
                  placeholder="Description"
                  multiline
                  numberOfLines={5}
                />
              ) : (
                <Text style={styles.textInformation}>{descText}</Text>
              )}

              <Text style={styles.textInformationTitle}>Starting Date</Text>
              <View style={styles.divider} />

              {editMode ? (
                <TouchableOpacity
                  style={styles.addDateContainer}
                  onPress={handleAddDate}>
                  <View style={styles.addDateButton}>
                    <Text>AddDate</Text>
                  </View>
                  <Text style={styles.dateText}>{date}</Text>
                </TouchableOpacity>
              ) : (
                <Text style={styles.textInformation}>{date}</Text>
              )}
              {!editMode && (
                <>
                  <Text style={styles.textInformationTitle}>
                    Progress state - {stateText[taskState]}
                  </Text>
                  <View style={styles.divider} />
                  <View style={styles.entriesContainer}>
                    <FlatList
                      style={styles.progressEntriesContainer}
                      data={data.progressEntries}
                      renderItem={renderGoalEntries}
                      keyExtractor={item => item.title}
                    />
                    {data.state === goalStates.IN_PROGRESS && (
                      <View>
                        {addProgress ? (
                          <View style={styles.addProgressTextContainer}>
                            <TextInput
                              style={[styles.title, styles.progressTitle]}
                              onChangeText={onChangeNewProgress}
                              value={newProgressTitle}
                              placeholder="Title"
                            />
                            <TouchableOpacity
                              style={styles.saveButton}
                              onPress={saveNewProgress}>
                              <Text>Save</Text>
                            </TouchableOpacity>
                          </View>
                        ) : (
                          <TouchableOpacity onPress={handleAddNewProgress}>
                            <Text style={styles.addProgress}>Add</Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    )}
                  </View>
                </>
              )}
            </View>
          </View>
          {editMode ? (
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleFinishEdit}>
                <Text style={styles.buttonText}>Finish Edit</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.buttonContainer}>
              {data.state === goalStates.CREATED && (
                <TouchableOpacity onPress={startGoal}>
                  <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
              )}

              {data.state === goalStates.IN_PROGRESS && (
                <TouchableOpacity onPress={handleEditMode}>
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
              )}

              {data.state === goalStates.IN_PROGRESS && (
                <TouchableOpacity onPress={onComplete}>
                  <Text style={styles.buttonText}>Complete</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity onPress={onDelete}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          <DateTimePickerModal
            isVisible={showDate}
            mode={'date'}
            onConfirm={onDateChange}
            onCancel={hideDateModal}
          />
        </View>
      </Modal>
    </View>
  );
};

export default TodoItemModal;
