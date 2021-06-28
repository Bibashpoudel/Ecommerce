import { CATEGORY_ADD_FAIL, CATEGORY_ADD_REQUEST, CATEGORY_ADD_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, SUBCATEGORY_ADD_FAIL, SUBCATEGORY_ADD_REQUEST, SUBCATEGORY_ADD_SUCCESS, SUBCATEGORY_LIST_FAIL, SUBCATEGORY_LIST_REQUEST, SUBCATEGORY_LIST_SUCCESS } from "../Constants/productConstants";



export const productListReducer =(state ={products:[]}, action) =>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return{
                loading:true
            };
        case PRODUCT_LIST_SUCCESS:
            return{
                loading:false,
                products:action.payload

            }   
        case PRODUCT_LIST_FAIL:
            return{
                loading:false,
                error:action.payload

            }
        
        default:
            return state
    }
};
export const productDetailsReducer =(state={product :{}}, action)=>{
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return{
                loading:true,
            }
        case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                product:action.payload
            }
        case PRODUCT_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload
            }      
        default:
            return state    

    }    

}

export const listCategoryReducer = (state ={categories:[]}, action) =>{
    switch(action.type){
        case CATEGORY_LIST_REQUEST:
            return{
                loading:true
            }
        case CATEGORY_LIST_SUCCESS:
            return{
                loading:false,
                categories:action.payload
            }
        case CATEGORY_LIST_FAIL:
            return{
                loading:false,
                error:action.payload
            }    
        default:
            return state;
    }

}
export const addCategoryReducer = (state ={}, action) =>{
    switch(action.type){
        case CATEGORY_ADD_REQUEST:
            return{
                loading:true
            }
        case CATEGORY_ADD_SUCCESS:
            return{
                loading:false,
                cat : action.payload
            }
        case CATEGORY_ADD_FAIL:
            return{
                loading:false,
                error:action.payload
            }    
        default:
            return state;    

    }
}



export const listSubCategoryReducer = (state ={subcategories:[]}, action) =>{
    switch(action.type){
        case SUBCATEGORY_LIST_REQUEST:
            return{
                subloading:true
            }
        case SUBCATEGORY_LIST_SUCCESS:
            return{
                subloading:false,
                subcategories:action.payload
            }
        case SUBCATEGORY_LIST_FAIL:
            return{
                subloading:false,
                suberror:action.payload
            }    
        default:
            return state;
    }

}
export const addSubCategoryReducer = (state ={}, action) =>{
    switch(action.type){
        case SUBCATEGORY_ADD_REQUEST:
            return{
                loading:true
            }
        case SUBCATEGORY_ADD_SUCCESS:
            return{
                loading:false,
                subcat : action.payload
            }
        case SUBCATEGORY_ADD_FAIL:
            return{
                loading:false,
                error:action.payload
            }    
        default:
            return state;    

    }
}

