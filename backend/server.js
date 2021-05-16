import express from 'express';
import data from './data.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'



import UserRouter from './Routers/userRouter.js'
import db from './database/connection.js';
import productRouter from './Routers/ProductRouter.js';
import CatRouter from './Routers/categoryRouter.js';

import SubcatRouter from './Routers/subcategoryRouter.js';

dotenv.config()

const app = express();

//request parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));




//DB connection
// db.sequelize
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection has been established successfully.');
//   }, function (err) {
//     console.log('Unable to connect to the database:', err);
//   });
// db.sequelize.sync()
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });


app.use('/api', UserRouter);
app.use('/api/category', CatRouter);
app.use('/api/subcategory', SubcatRouter);
app.use('/api/product',productRouter);


app.get('/api/products', (req, res) =>{
    res.send(data.products);
})
app.get('/api/product/:id', (req,res) =>{
    const product = data.products.find((x) => x._id === req.params.id);
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message: 'product not found'});
    }
})

app.get('/', (req, res) =>{
    res.send("message from server");


})

const port  = process.env.PORT || 5001

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`);
})
