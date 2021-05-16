import { CATEGORY_ADD_FAIL, CATEGORY_ADD_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/productConstants";



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

export const listCategory = (state ={categories:[]}, action) =>{
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
