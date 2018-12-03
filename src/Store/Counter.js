const INCREMENT = 'INCREMENT'
const DEC = 'DECREMENT'
const RESET = 'RESET'

export const addInc = () => ({
    type: INCREMENT
})
export const addDec = () => ({
    type: DEC
})
export const reset = () => ({
    type: RESET
})
export default (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return (state + 1)
        case DEC:
            return (state - 1)
        case RESET:
            return (state = 0)
        default:
            return state
    }
}