import goalStates from '../../utils/goalStates';
import types from '../actionsTypes';

export const addItem = payload => ({
  type: types.ADD_TODO_ITEM,
  payload,
});

const deleteList = payload => ({
  type: types.DELETE_TODO_LIST,
  payload,
});

export const addNewItem = (listId, item) => (dispatch, getState) => {
  const {todoLists} = getState().TodoListReducer;
  const newList = todoLists.slice();
  newList.forEach(el => {
    if (el.id === listId) {
      el.todoList.push(item);
    }
  });
  dispatch(addItem(newList));
};

export const editTodoItem = (listId, itemId, item) => (dispatch, getState) => {
  const {todoLists} = getState().TodoListReducer;
  const newList = todoLists.slice();

  newList.forEach(el => {
    if (el.id === listId) {
      el.todoList = el.todoList.map(element =>
        element.id === itemId ? item : element,
      );
    }
  });
  dispatch(addItem(newList));
};

export const addNewEntrie = (listId, itemId, item) => (dispatch, getState) => {
  const {todoLists} = getState().TodoListReducer;
  const newList = todoLists.slice();

  newList.forEach(el => {
    if (el.id === listId) {
      el.todoList = el.todoList.map(element => {
        if (element.id === itemId) {
          element.progressEntries.push(item);
        }
        return element;
      });
    }
  });

  dispatch(addItem(newList));
};

export const completeItem = (listId, itemId) => (dispatch, getState) => {
  const {todoLists} = getState().TodoListReducer;
  const newList = todoLists.slice(0);

  const listItem = newList.filter(el => el.id === listId && el)[0];

  listItem.todoList.forEach((el, index) => {
    if (el.id === itemId) {
      const newId = listItem.completedList.length === 0 ? 1 : listItem.completedList[listItem.completedList.length - 1].id + 1; 
      listItem.completedList.push(el);
      el.state = goalStates.COMPLETED;
      listItem.todoList.splice(index, 1);
     
      console.log(newId, listItem.completedList, "completed list antes")
      el.id = newId;
    }
  });

  dispatch(addItem(newList));
};

export const deleteTodoItem =
  (listId, itemId, isCompleted) => (dispatch, getState) => {
    const {todoLists} = getState().TodoListReducer;
    const newList = todoLists.slice(0);
    const listItem = newList.filter(el => el.id === listId && el)[0];
    if (isCompleted) {
      listItem.completedList.forEach((el, index) => {
        if (el.id === itemId) {
          listItem.completedList.splice(index, 1);
        }
      });
    } else {
      listItem.todoList.forEach((el, index) => {
        if (el.id === itemId) {
          listItem.todoList.splice(index, 1);
        }
      });
    }

    dispatch(addItem(newList));
  };
