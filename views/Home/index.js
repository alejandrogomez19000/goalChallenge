import React, {useState} from 'react';
import styles from './HomeStyles';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  deleteTodoList,
  createTodoList,
} from '../../redux/actions/TodoListActions';
import {useDispatch, useSelector} from 'react-redux';

import CreateTodoListModal from '../../components/Modals/CreateTodoList';
import { routeNames } from '../../navigation/Routes';

const Home = ({data, addItem, navigation}) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  
  const {todoLists} = useSelector(state => state.TodoListReducer);
  const handleNavigateTodoList = (data) => {
      navigation.navigate(routeNames.TODO_LIST, {data})
  }
  const renderTodoList = () =>
    todoLists?.map((el, index) => (
      <TouchableOpacity onPress={() => handleNavigateTodoList(el)}>
        <View style={styles.todoListItem}>
          <Text style={styles.todoListItemText}>{el.title}</Text>
          <TouchableOpacity onPress={() => deleteList(el)}>
            <Text style={styles.todoListItemText}>X</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    ));
  const clickButton = () => {
    setOpenModal(!openModal);
  };
  const createNewList = newList => {
    dispatch(createTodoList({title: newList, todoList: [], completedList: []}));
    closeModal();
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const deleteList = item => {
    dispatch(deleteTodoList(item.id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.addButtonContainer}>
        <Text style={styles.dividerText}>Goals List</Text>
        <TouchableOpacity onPress={clickButton}>
          <View style={styles.addListButton}></View>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />

      {renderTodoList()}

      <CreateTodoListModal
        onClose={closeModal}
        onSubmit={createNewList}
        isVisible={openModal}
      />
    </View>
  );
};

export default Home;
