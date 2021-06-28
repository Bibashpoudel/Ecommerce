import axios from "axios";
import { CATEGORY_ADD_FAIL, CATEGORY_ADD_REQUEST, CATEGORY_ADD_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, PRODUCT_ADD_FAIL, PRODUCT_ADD_REQUEST, PRODUCT_ADD_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, SUBCATEGORY_ADD_FAIL, SUBCATEGORY_ADD_REQUEST, SUBCATEGORY_ADD_SUCCESS, SUBCATEGORY_LIST_FAIL, SUBCATEGORY_LIST_REQUEST, SUBCATEGORY_LIST_SUCCESS } from "../Constants/productConstants"


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
export const AddProduct = (name, ) => async(dispatch)=>{
    dispatch({
        type:PRODUCT_ADD_REQUEST,
        payload:{}
    })
    try {
        const {data} = await axios.post('/api/category/add', {})
        dispatch({
            type:PRODUCT_ADD_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:PRODUCT_ADD_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
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
        const {data} = await axios.get('/api/category/all')
        dispatch({
            type:CATEGORY_LIST_SUCCESS,
            payload: data
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

export const AddCategory = (cat_name) => async(dispatch)=>{
    dispatch({
        type:CATEGORY_ADD_REQUEST,
        payload:{cat_name}
    })
    try {
        const {data} = await axios.post('/api/category/add', {cat_name})
        dispatch({
            type:CATEGORY_ADD_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:CATEGORY_ADD_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}



export const listSubCategory = () => async(dispatch)=>{
    dispatch({
        type:SUBCATEGORY_LIST_REQUEST,   
    })
    try {
        const {data} = await axios.get('/api/subcategory/all')
        dispatch({
            type:SUBCATEGORY_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:SUBCATEGORY_LIST_FAIL,
            payload:
                error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message
        })
    }
}
export const AddSubCategory = (sub_cat_name, cat_name) => async(dispatch)=>{
    dispatch({
        type:SUBCATEGORY_ADD_REQUEST,
        payload:{sub_cat_name, cat_name}
    })
    try {
        const {data} = await axios.post('/api/subcategory/add', {sub_cat_name, cat_name})
        dispatch({
            type:SUBCATEGORY_ADD_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:SUBCATEGORY_ADD_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}