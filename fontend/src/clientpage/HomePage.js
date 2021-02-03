import React from 'react';
import Product from '../components/Products';
import data from '../data';


function HomePage(){
    return(
        <div className="row center">
            {
            data.products.map((product)=>(


                <Product key={product._id} product={product}></Product>
                
                

            ))
            }
        </div>
    );
}

export default HomePage;