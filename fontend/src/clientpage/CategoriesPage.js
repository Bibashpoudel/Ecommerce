import React, { useEffect,  } from 'react';

import {useDispatch, useSelector} from 'react-redux'

import Product from '../components/Products';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

import '../stylesheet/client.css'
import { listProduct } from '../action/productAction';



function CategoriesPage(){

    //defining react hook:
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const {loading, error, products} = productList; 


    

    //another hooks //accepts 2 paramater function array , it only run one time after rending data
    useEffect(() =>{
       
        dispatch(listProduct());
    

    }, [ dispatch]);
    return(
    <div>
        {
            loading? <LoadingBox></LoadingBox>
        :
            error? <MessageBox variant="danger">{error}</MessageBox>
        :  
        <div className="row center">
            {
            products.map((product)=>(
                <Product key={product._id} product={product}></Product>
            ))
            }
        </div>
      
    }
    </div>
        
    );
}

export default CategoriesPage;