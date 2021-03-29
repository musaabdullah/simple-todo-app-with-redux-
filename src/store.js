import { createStore,combineReducers } from 'redux';
import usersReducer from './Reducers/index';
import todoReducer from './Reducers/todoReducer';
const reducers = combineReducers({
    users: usersReducer,
    todos: todoReducer
})

export default createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );