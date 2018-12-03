import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { combineReducers, createStore } from 'redux'
import todos, { addToDo } from './Store'


const rootReducer = combineReducers({
    todos
})
const store = createStore(rootReducer)

console.warn(store.getState())
store.dispatch(addToDo('Go Shopping'))
store.dispatch(addToDo('Some other thing'))
store.dispatch(addToDo('Clean the house'))
console.warn(store.getState())


ReactDOM.render(<App />, document.getElementById('root'));
