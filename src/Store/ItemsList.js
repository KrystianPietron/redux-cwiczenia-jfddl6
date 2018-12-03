const ADD_TO_CARD = 'ADD_TO_CARD'
const INITIAL_STATE = {
    cardTotal: 0,
    items: []
}

export const addItem = (title, price) => ({
    type: ADD_TO_CARD,
    item: {
        title,
        price,
    }
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CARD:
            return {
                ...state,
                items: [...state.items, action.item],
                cardTotal: (state.cardTotal + action.item.price)
            }
        default:
            return state
    }
}