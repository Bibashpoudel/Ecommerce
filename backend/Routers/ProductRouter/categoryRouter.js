import express, { request } from 'express'
import bcrypt from 'bcryptjs'


// import db from '../database/connection.js'

import Category from '../../model/ProductModel/Category.js'


const CatRouter = express.Router();


CatRouter.get('/all', async(req,res)=>{
    try {
        const cat = await Category.findAll();
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
CatRouter.post('/add', async(req, res)=>{
    
    const category = await Category.findOne({where:{ cat_name: req.body.cat_name}})
    if(!category){
        try {
            Category.create({
                cat_name:req.body.cat_name,
                
            })
                .then(data => {
                    res.send({
                        id:data.id,
                        name:data.cat_name,
                       
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
            "category already exist"
        });
    }
})
export default CatRouter;