import express, { request } from 'express'
import bcrypt from 'bcryptjs'


// import db from '../database/connection.js'

import SubCategory from '../../model/ProductModel/subCategory.js'
import Category from '../../model/ProductModel/Category.js';


const SubcatRouter = express.Router();


SubcatRouter.get('/all', async(req,res)=>{
    try {
        const cat = await SubCategory.findAll();
        if(!cat){
            res.send({messg:"cat not found"})
        }
        else{
            res.send(cat)
        }
    } catch (error) {
        res.send({
            message:
            "bibash poudel"
        });
    }
})
SubcatRouter.post('/add', async(req, res)=>{
    
    const category = await Category.findOne({where:{ cat_name: req.body.cat_name}})
    //const subcategory = await SubCategory.findOne({where:{ sub_cat_name: req.body.sub_cat_name}})
       
    if(category){
        const catid = category.id
        console.log(catid)
        
        try {
            SubCategory.create({
                sub_cat_name:req.body.sub_cat_name,
                cat_id:catid
                
            })
                .then(data => {
                    res.send({
                        id:data.id,
                        name:data.sub_cat_name,
                       
                    })
                })
                .catch(err => {
                res.status(500).send({
                    message:
                    "Some error occurred while creating the Tutorial."
                });
            });

            
        } catch (error) {
            res.send({
                message:
                "bibash poudel category error"
            });
        }
    }else{
        res.send({
            message:
            "category does not exits"
        });
    }
})
export default SubcatRouter;