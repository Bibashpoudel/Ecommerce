import axios from "axios"
import { ADD_CART_ITEM, REOMVE_CART_ITEM } from "../Constants/cartConstants";

export const addtoCart = (productId, qty) =>async(dispatch, getState)=>{
    const {data} = await axios.get(`/api/product/${productId}`);

    dispatch({
        type:ADD_CART_ITEM,
        payload:{
            name:data.name,
            images:data.image,
            price:data.price,
            countInStock:data.countInStock,
            product:data._id,
            qty,
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    
}

export const reomveFromCart =(productId)=>(dispatch, getState)=>{
    dispatch({
        type: REOMVE_CART_ITEM,
        payload:productId
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}