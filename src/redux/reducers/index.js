import {combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"

const rootReducer = combineReducers({
    changeCategoryReducer:changeCategoryReducer,
    categoryListReducer:categoryListReducer
})

export default rootReducer;