import { legacy_createStore } from "redux";
import { todoReducer } from "../reducer/todoReducer";


const Store = legacy_createStore(todoReducer);

export default Store;