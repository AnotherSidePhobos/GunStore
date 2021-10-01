import { combineReducers, createStore } from "redux";
import {productReducer} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';


let reducers = combineReducers({
    product: productReducer,
    cart: cartReducer
});


let store = createStore(reducers);

export default store;