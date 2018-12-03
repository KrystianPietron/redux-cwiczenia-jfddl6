import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { combineReducers, createStore } from 'redux'
import todos, { addToDo } from './Store/ToDos'
import Counter, { addInc } from './Store/Counter'

const rootReducer = combineReducers({
    todos,
    Counter
})
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch(addToDo('Go Shopping'))
store.dispatch(addToDo('Some other thing'))
store.dispatch(addToDo('Clean the house'))
store.dispatch(addInc(5))
store.dispatch(addInc(2))
store.dispatch(addInc(3))

ReactDOM.render(<App />, document.getElementById('root'));
