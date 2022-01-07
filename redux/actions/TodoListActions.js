import types from '../actionsTypes';

export const createList = (payload) => ({
    type: types.CREATE_TODO_LIST,
    payload,
});

const deleteList = (payload) => ({
    type: types.DELETE_TODO_LIST,
    payload,
});

export const createTodoList = (item) => (dispatch, getState) => {
    const {todoLists} = getState().TodoListReducer;
    const newList = todoLists.slice();
    const newId = todoLists.length === 0 ? 1 : todoLists[todoLists.length - 1].id + 1
    const newListItem = {
        id: newId,
        ...item
    }
    newList.push(newListItem)
    dispatch(createList(newList))
};

export const deleteTodoList = (itemId) => (dispatch, getState) => {
    const {todoLists} = getState().TodoListReducer;
    const newList = todoLists.slice();
    todoLists.forEach((el,index)=> {
        if(el.id === itemId){
            newList.splice(index, 1);
        }
    });

    dispatch(deleteList(newList))

};