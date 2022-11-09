import {ADD_TODO, DELETE_TODO, EDITING_DATA, TOGGLE_EDITING, UPDATE_DATA} from '../action/action';

const initial_state = {
  data: {
    GROCERY: [
      {
        id: 101,
        title: 'Add New Book',
        subTitle: 'New Book',
      },
    ],

    PERSONAL: [
      {
        id: 102,
        title: 'Add New pen',
        subTitle: 'New pen',
      },
    ],

    WORK: [
      {
        id: 103,
        title: 'Add New pencil',
        subTitle: 'New pencil',
      },
    ],
  },
  is_editing:false,
  editedData: null,
};



export const todoReducer = (state = initial_state, action) => {
  const {type, payload} = action;
  console.log();
  console.log('payload======>>>>>>',payload);

  switch (type) {
    case ADD_TODO:
      console.log('state =>>>>>>>',{ data: {...state.data, ...payload}});
      return { data: {...state.data, ...payload}};
    case DELETE_TODO: 
      return {data: {...state.data, ...payload}};
    case TOGGLE_EDITING:
      return {...state, is_editing: !state.is_editing};
    case EDITING_DATA:
      console.log(payload);
      return {...state}
    case UPDATE_DATA: 
      console.log({data: {...state.data, ...payload}});
      return {data: {...state.data, ...payload}}
    default:
      return state;
  }
};
