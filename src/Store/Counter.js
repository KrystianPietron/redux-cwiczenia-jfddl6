const INCREMENT = 'INCREMENT'
const DEC = 'DECREMENT'
export const addInc = () => ({
    type: INCREMENT
})
export const addDec = () => ({
    type: DEC
})
export default (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return (state + 1)
        case DEC:
            return (state - 1)
        default:
            return state
    }
}