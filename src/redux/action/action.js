export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const EDITING_DATA = 'EDITING_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';

export const addNewData = (data, nav) => {
  return {
    type: ADD_TODO,
    payload:  {[nav]: data},
  };
};

export const deleteData = (newData, nav) => {
    return {
        type: DELETE_TODO,
        payload: {[nav]: newData}
    }
};

export const toggleEditing = () => {
    return {
        type: TOGGLE_EDITING,
    };
};

export const editingData = (editedData) => {
    return {
        type: EDITING_DATA,
        payload: editedData
    }
}

export const updateData = (data,nav) => {
    return{
        type: UPDATE_DATA,
        payload: {[nav]: data}
    }
}


