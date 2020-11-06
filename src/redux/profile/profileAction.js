export const getAuthenticationData = (login, password) => {
    return {
        type: 'COMPARE DATA',
        payload: {
            login,
            password,

        }
    }
}