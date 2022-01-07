import React, {useState} from 'react';
import styles from './TodoListStyles';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import TodoCard from '../../components/TodoCard';
import Button from '../../components/Button';
import cardStates from '../../utils/cardStates';
import CreateTodoListModal from '../../components/Modals/CreateTodoList';
import TodoItemModal from '../../components/Modals/TodoItem';

import {useDispatch} from 'react-redux';
import {
  addNewItem,
  editTodoItem,
  completeItem,
  deleteTodoItem,
  addNewEntrie,
} from '../../redux/actions/TodoItems';
import goalStates from '../../utils/goalStates';
import moment from 'moment';

const TodoList = ({navigation, route}) => {
  const [openItemModal, setOpenItemModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const [modalData, setModalData] = useState({});

  const dispatch = useDispatch();
  const data = route.params.data;

  const renderTodo = () =>
    data?.todoList?.map(
      (el, index) =>
        el.state === goalStates.CREATED && (
          <TouchableOpacity
            key={index + el.title}
            onPress={() => openTodoInformation(el)}>
            <TodoCard title={el.title} date={el.date} state={cardStates.TODO} />
          </TouchableOpacity>
        ),
    );

  const renderInProgress = () =>
    data?.todoList?.map(
      (el, index) =>
        el.state === goalStates.IN_PROGRESS && (
          <TouchableOpacity
            key={index + el.title}
            onPress={() => openTodoInformation(el)}>
            <TodoCard title={el.title} date={el.date} state={cardStates.TODO} />
          </TouchableOpacity>
        ),
    );

  const renderCompleted = () =>
    data?.completedList?.map((el, index) => (
      <TouchableOpacity
        key={index + el.title}
        onPress={() => openTodoInformation(el, true)}>
        <TodoCard
          title={el.title}
          date={el.date}
          state={cardStates.COMPLETED}
        />
      </TouchableOpacity>
    ));

  const closeModal = () => {
    setOpenModal(false);
  };

  const closeItemModal = () => {
    setOpenItemModal(false);
  };

  const handleAddNewItem = (title, description, date) => {
    const todoList = data.todoList;
    const newId =
      todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1;
    dispatch(
      addNewItem(data.id, {
        id: newId,
        title,
        description,
        date,
        state: goalStates.CREATED,
        progressEntries: [{title: 'Goal Created', date}],
      }),
    );
    setOpenModal(false);
  };

  const openTodoInformation = (data, isCompleted) => {
    setOpenItemModal(true);
    setModalData(data);
    setIsCompleted(isCompleted ? true : false);
  };

  const completeTodoItem = () => {
    dispatch(completeItem(data.id, modalData.id));
    closeItemModal();
  };

  const editItem = newItem => {
    dispatch(editTodoItem(data.id, modalData.id, newItem));
  };

  const deleteItem = () => {
    dispatch(deleteTodoItem(data.id, modalData.id, isCompleted));
    closeItemModal();
  };

  const startGoal = () => {
    dispatch(
      editTodoItem(data.id, modalData.id, {
        ...modalData,
        state: goalStates.IN_PROGRESS,
        progressEntries: [
          ...modalData.progressEntries,
          {title: 'Goal Started', date: moment(new Date()).format('MMM Do YY')},
        ],
      }),
    );
    closeItemModal();
  };

  const addNewProgress = newItem => {
    dispatch(addNewEntrie(data.id, modalData.id, newItem));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          text="Add Item"
          onClick={() => {
            setOpenModal(true);
          }}
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.contentContainer}>
        <Text style={styles.dividerText}>TO DO</Text>
        {renderTodo()}

        <Text style={styles.dividerText}>IN PROGRESS</Text>
        {renderInProgress()}

        <Text style={styles.dividerText}>COMPLETED</Text>
        {renderCompleted()}
      </View>
      <TodoItemModal
        onClose={closeItemModal}
        isVisible={openItemModal}
        onEdit={editItem}
        onComplete={completeTodoItem}
        onDelete={deleteItem}
        data={modalData}
        startGoal={startGoal}
        addNewProgress={addNewProgress}
      />
      <CreateTodoListModal
        onClose={closeModal}
        onSubmit={handleAddNewItem}
        isVisible={openModal}
        isAddItem
      />
    </ScrollView>
  );
};

export default TodoList;
