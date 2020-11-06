const initialState = {
booksArray : require('../../../bookDataBase.json')

}
export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
            return {
                ...state
            }

        default: return state
    }

}