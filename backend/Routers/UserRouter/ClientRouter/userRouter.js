import express, { request } from 'express'
import bcrypt from 'bcryptjs'


// import db from '../database/connection.js'

import User from '../../../model/UserModel/ClientModel/User.js'
import { generateToken } from '../../../utils.js';
const userRouter = express.Router();

userRouter.get('/all', async(req,res)=>{

    try {
        const user = await User.findAll();

        if(!user){
            res.send({messg:"user not found"})
        }
        else{
            res.send(user)
        }
    } catch (error) {
        res.send({
            message:
            "bibash poudel"
        });
    }

})
userRouter.post('/register', async(req,res)=>{

    var term = "9";
    var re = new RegExp("/{9}/");
    if (re.test(term)) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }

        const oldphone = await User.findOne({where : {phone: req.body.phone}});
        const password = req.body.password;
        const haspassword = bcrypt.hashSync(password,8)
        console.log(haspassword)
        
        if(oldphone){
            res.send({message:"user alreay exist"}) 
           
        }
        else{
           
            try {
                User.create({
                    name:req.body.name,
                    phone:req.body.phone,
                    password:haspassword
                })
                    .then(data => {
                        res.send({
                            id:data.id,
                            name:data.name,
                            token:generateToken(data)
                        })
                    })
                    .catch(err => {
                    res.status(500).send({
                        message:
                        "Some error occurred while creating the Tutorial."
                    });
                });

            } catch (error) {
                res.send({messg:"bibash error"})
                
            }
        }
})

userRouter.post('/signin', async(req, res)=>{
    const user = await User.findOne({where: {phone:req.body.phone}})

    if (user){
       if(bcrypt.compareSync(req.body.password, user.password)){
           res.send({
               id:user.id,
               name:user.name,
               phone:user.phone,
               token:generateToken(user),
           });
           return;
       }
       else{
        res.status(401).send({message:"Incorrect password "})
       }
    }
    else{
        res.status(401).send({message:"invalid username "})
    }
} )
userRouter.post('/shippingaddress', async(req, res)=>{
    const user = await User.findOne({where: {phone:req.body.phone}})

    if (user){
       if(bcrypt.compareSync(req.body.password, user.password)){
           res.send({
               id:user.id,
               name:user.name,
               phone:user.phone,
               token:generateToken(user),
           });
           return;
       }
       else{
        res.status(401).send({message:"Incorrect password "})
       }
    }
    else{
        res.status(401).send({message:"invalid username "})
    }
} )

export default userRouter;