const ADD_TO_CARD = 'ADD_TO_CARD'
// const INITIAL_STATE = (cardTotal= 0)

export const addItem = (title, price)=>({
    type: ADD_TO_CARD,
    title,
    price
})

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CARD:
            const newItem = { title: action.title, price: action.price }
            return [...state, newItem]
        default:
            return state
    }
}