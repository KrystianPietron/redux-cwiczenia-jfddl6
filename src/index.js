import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { combineReducers, createStore } from 'redux'
import todos, { addToDo } from './Store/ToDos'
import Counter, { addInc, addDec, reset } from './Store/Counter'
import ItemsList, { addItem } from './Store/ItemsList'

const rootReducer = combineReducers({
    ItemsList,
    todos,
    Counter
})
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

// store.dispatch(addToDo('Go Shopping'))
// store.dispatch(addToDo('Some other thing'))
// store.dispatch(addToDo('Clean the house'))
// store.dispatch(addInc())
// store.dispatch(addInc())
// store.dispatch(addInc())

window.powiekszLicznik = () => store.dispatch(addInc())
window.dodajToDo = (text) => store.dispatch(addToDo(text))
window.odejmijLicznik = () => store.dispatch(addDec())
window.restartuj = () => store.dispatch(reset())
window.dodajItem = (title, price) => store.dispatch(addItem(title, price))



ReactDOM.render(<App />, document.getElementById('root'));
