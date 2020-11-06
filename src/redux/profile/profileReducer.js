const initialState = {
    login: 'admin',
    password: 'password',
    isAuthorized: localStorage['isAuthorized'] === undefined? false : JSON.parse(localStorage['isAuthorized']),
     
}
export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'COMPARE DATA' : 
            let inputLoginValue = action.payload.login; 
            let inputPasswordValue = action.payload.password; 
            if (inputLoginValue === state.login && inputPasswordValue === state.password) {
                return {...state, isAuthorized: true}      
            } else {
                return {...state}
            }
            
        default : return state
    }

}