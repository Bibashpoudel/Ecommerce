import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { listProductDetails } from '../action/productAction';


function ProductPage(props){
    // const product = data.products.find((x) => x._id === props.match.params.id);
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector((state) =>state.productDetails);
    const {loading, error, product} = productDetails;

    const [qty , setQty ] = useState(1);

    useEffect(() =>{
        dispatch(listProductDetails(productId));
        
    }, [dispatch, productId] );



    const addtoCart=()=>{
        props.history.push(`/cart/${productId}?qty=${qty}`);

    }


    
    
    if (!product){
        return (
            <div>
                Product doesnot exits
            </div>
        )
    }
     
    return(
        <div style={{marginTop:"2rem"}}>
            <Link to="/" style={{color:"black",marginTop:"2rem"}}>Back to shopping</Link>
            {
            loading? <LoadingBox></LoadingBox>
        :
            error? <MessageBox variant="danger">{error}</MessageBox>
        : 
            <div className="row top">
                <div className="col-2 ">
                    <img id="myimage"  className=" large" src={product.image} alt={product.name}></img>
                </div>
                {/* <div id="myresult" className="img-zoom-result"></div> */}
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating
                                rating={product.rating}
                                numReviews={product.numReviews}
                            ></Rating>
                        </li>
                        <li>
                            Price: {product.price}
                        </li>
                        <li>
                            <p>{product.description}</p>
                        </li>
                    </ul>

                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price:</div>
                                    <div className="price">
                                        ${product.price}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>status:</div>
                                    <div >
                                        {
                                        product.countInStock > 0 ?(
                                            <span className="success"> In stock</span>
                                        ):(
                                            <span className="danger"> Out of stock</span>
                                        )}
                                    </div>
                                </div>
                            </li>
                            {
                                product.countInStock >0  &&(
                                    <li>
                                        <div className="row">
                                            <div>Qty</div>
                                             <div>
                                                 <select value={qty} onChange={((e) => setQty(e.target.value) )} >
                                                    {
                                                        [...Array(product.countInStock).keys()].map(x =>(
                                                            <option key={x+1} value={x+1}>{x+1}</option>
                                                        ))
                                                    }
                                                 </select>
                                             </div>
                                        </div>
                                    </li>
                                )
                            }
                            <li>
                                {
                                    product.countInStock <= 0?
                                    <button  disabled onClick={addtoCart} className="primary block" > Add to Cart</button>
                                    :
                                    <button onClick={addtoCart} className="primary block"> Add to Cart</button>
                                }
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
}
        </div>

        
    );
}


export default ProductPage;