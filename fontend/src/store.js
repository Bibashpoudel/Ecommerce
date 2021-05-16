
import thunk from 'redux-thunk';

import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {productDetailsReducer, productListReducer} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { userRegisterReducer, userSigninReducer } from './reducers/userReucer';


const initialState = {
    userRegister:{
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    }
    ,
    userSignin:{
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },


    cartItem :{
        cartItems:localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : []
    }
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,

});



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;