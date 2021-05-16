import express, { request } from 'express'
import bcrypt from 'bcryptjs'


// import db from '../database/connection.js'

import Product from '../model/Product.js'


const productRouter = express.Router();


productRouter.get('/all', async(req,res)=>{

    try {
        const product = await Product.findAll();

        if(!product){
            res.send({messg:"user not found"})
        }
        else{
            res.send(product)
        }
    } catch (error) {
        res.send({
            message:
            "bibash poudel"
        });
    }


})
export default productRouter;