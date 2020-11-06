import { combineReducers } from "redux"
import { booksReducer } from "./profile/books/booksReducer"
import { profileReducer } from "./profile/profileReducer"

export const rootReducer = combineReducers({
profileReducer,
booksReducer

})