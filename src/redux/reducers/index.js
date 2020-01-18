import {combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer"
import cartReducer from "./cartReducer"



const rootReducer = combineReducers({
    changeCategoryReducer:changeCategoryReducer,
    categoryListReducer:categoryListReducer,
    productListReducer:productListReducer,
    cartReducer:cartReducer
})

export default rootReducer;