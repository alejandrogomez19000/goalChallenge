import types from '../actionsTypes';

const initialState = {
  todoLists: [],
};

export default function TodoListReducer(state = initialState, {type, payload}) {
  switch (type) {
    case types.CREATE_TODO_LIST:
      return {
        ...state,
        todoLists: payload,
      };

    case types.DELETE_TODO_LIST:
      return {
        ...state,
        todoLists: payload,
      };
      
    case types.ADD_TODO_ITEM:
      return {
        ...state,
        todoLists: payload,
      };

    default:
      return state;
  }
}
