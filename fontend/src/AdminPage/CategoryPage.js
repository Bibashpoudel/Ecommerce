import React, { useEffect, useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { AddCategory, AddSubCategory, listCategory, listSubCategory } from '../action/productAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';




function CategoryPage(){


    const [category, SetCategory] = useState();

    const[categoryName ,SetCategoryName] = useState();
    const [SubCategory ,SetSubCategory] = useState();
    const dispatch = useDispatch();
   

    const categoriesList = useSelector((state) => state.categoriesList);
    const {loading, error, categories} = categoriesList; 
    const subcategoriesList = useSelector((state) => state.subcategoriesList );
    const {subloading, suberror, subcategories} = subcategoriesList; 

    const categoryAdd = useSelector((state) => state.categoryAdd);
    const {load, err, cat} = categoryAdd;


    const addCategory =(e)=>{
        e.preventDefault();
        dispatch(AddCategory(category));
        
        
    }
    const addsubCategory =(e)=>{
        e.preventDefault();
        dispatch(AddSubCategory(SubCategory, categoryName))
       
        
    }

    useEffect(()=>{
       dispatch(listCategory());
       dispatch(listSubCategory())
       
       

    },[dispatch, ])

    

    return(
        <div>
        
        <div className="row ">
            
            <div>
                <h2>Add a New Category</h2>
                {
                        loading? <LoadingBox></LoadingBox>
                    :
                        error? <MessageBox variant="danger">{error}</MessageBox>
                    :<div></div>
                }
                <form className="form" onSubmit={addCategory}>
                <div className="">
                    <label htmlFor="Category">  Category</label>
                    <input 
                        type="text" 
                        id="ategory" 
                        placeholder="Category"
                        onChange={(e)=> SetCategory(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label/>
                    <button type="submit" className="primary">add Category</button>
                </div>

                </form>
            </div>
            <div>
                <h2>Add a New sub Category</h2>
                <form className="form" onSubmit={addsubCategory}>
                <div className="">
                    <label htmlFor="SubCategory">  SUB Category</label>
                    <input 
                        type="text" 
                        id="subcategory" 
                        placeholder="Sub Category"
                        onChange={(e)=> SetSubCategory(e.target.value)}
                    ></input>
                </div>
                <div className="">
                    <label htmlFor="Category">  Category</label>
                    {
                        loading? <LoadingBox></LoadingBox>
                    :
                        error? <MessageBox variant="danger">{error}</MessageBox>
                    : 
                        <select onChange={(e) =>SetCategoryName(e.target.value)}>
                            {
                                categories.map((cat) =>(
                                    <option key={cat.id} >
                                        {cat.cat_name}
                                    </option>
                                ))
                            }   
                        </select>
                    }
                </div>
                <div>
                    <label/>
                    <button type="submit" className="primary">add Category</button>
                </div>

                </form>
            </div>
            <div>
            <div>
                {
                        loading? <LoadingBox></LoadingBox>
                    :
                        error? <MessageBox variant="danger">{error}</MessageBox>
                    :  
                    
                    <div>
                        <h3>Categories</h3>
                            {
                            categories.map((category)=>(
                               
                                <ul key={category.id}>
                                    <li> {category.cat_name}</li>
                                </ul>
                            ))
                            }
                    </div>
                }
            </div>
                {
                        subloading? (<LoadingBox></LoadingBox>)
                    :
                        suberror? (<MessageBox variant="danger">{error}</MessageBox>)
                    :  
                    (<div>
                        <h3>Sub Categories</h3>
                            {
                            subcategories.map((subcat)=>(
                                <ul key={subcat.id}>
                                    <li> {subcat.sub_cat_name}</li>
                                </ul>
                            ))
                            }
                    </div>)
                }
            </div>

        </div>
   
    </div>
    )

}

export default CategoryPage;