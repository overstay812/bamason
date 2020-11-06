const initialState = {
    login: 'admin',
    password: 'password' 
}
export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case '' : 
        return{
            ...state
        }
        default : return state
    }

}