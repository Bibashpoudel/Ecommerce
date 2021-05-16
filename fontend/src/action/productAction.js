import axios from "axios";
import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/productConstants"


export const listProduct =()  => async(dispatch) =>{
    dispatch({
        type:PRODUCT_LIST_REQUEST,

    });
    try {
        
        const { data } = await axios.get('/api/products');
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload:data
        });
        
    } catch (error) {
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload:error.message
        });
        
        
    }

}

export const listProductDetails =(productId)  => async(dispatch) =>{
    dispatch({
        type:PRODUCT_DETAILS_REQUEST,
        payload:productId
    })
    try {
        const {data} = await axios.get(`/api/product/${productId}`);
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
        
    }
}
// for category list
export const listCategory = () => async(dispatch)=>{
    dispatch({
        type:CATEGORY_LIST_REQUEST,
        
    });
    try {
        const {category} = await axios.get('/api/category/all')
        dispatch({
            type:CATEGORY_LIST_SUCCESS,
            payload: category
        })
        
    } catch (error) {
        dispatch({
            type:CATEGORY_LIST_FAIL,
            payload:
                error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
        
    }

}