const initialState = {
booksArray : require('../../bookDataBase.json')
}

// there is cases yet

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
            return {
                ...state
            }

        default: return state
    }
}