
import React from 'react'

const addProduct =()=>{

}

function ProductAdd(props){
    return(
        <div className="row center">
            <form className="form" onSubmit={addProduct}>
                <div className="">
                    <label htmlFor="Image">  Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Product Name"
                        // onChange={(e)=> SetCategory(e.target.value)}
                    ></input>
                </div>
                <div className="">
                    <label htmlFor="Image">  Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Product Name"
                        // onChange={(e)=> SetCategory(e.target.value)}
                    ></input>
                </div>
                <div className="">
                    <label htmlFor="Image">  Image</label>
                    <input 
                        type="file" 
                        id="image" 
                        placeholder="upload image"
                        // onChange={(e)=> SetCategory(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label/>
                    <button type="submit" className="primary">add product</button>
                </div>

                </form>

        </div>
    )

}

export default ProductAdd;