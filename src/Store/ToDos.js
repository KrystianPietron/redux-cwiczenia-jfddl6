const ADD_TODO = 'ADD_TODO'
const FILTER_TODO = 'FILTER_TODO'

const INITIAL_STATE = {
    allTodos: [],
    filterTodos: []
}

export const addToDo = text => ({
    type: ADD_TODO,
    text
})
export const filterTodos = text => ({
    type: FILTER_TODO,
    input: text
})
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newToDo = { text: action.text, completed: false }
            return {
                ...state,
                allTodos: [
                    ...state.allTodos,
                    newToDo
                ]
            }
        case FILTER_TODO:
            return {
                ...state,
                filterTodos: state.allTodos.filter(todo => todo.text.includes(action.input))
            }
        default:
            return state
    }
}