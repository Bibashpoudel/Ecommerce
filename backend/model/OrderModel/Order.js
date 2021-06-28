

import Sequelize from 'sequelize'
import db from '../../database/connection'
import Product from '../ProductModel/Product'
import User from '../UserModel/ClientModel/User'



const Order = db.sequelize.define('order',{
    id:{
        type:Sequelize.INTEGER,
  
        // To increment user_id automatically.
        autoIncrement:true,
  
        // user_id can not be null.
        allowNull:false,
  
        // For uniquely identify user.
        primaryKey:true

    },
    user_id:{
        type: Sequelize.INTEGER,
        references: {
            // This is a reference to another model
            model: User,

            // This is the column name of the referenced model
            key: 'id'
        }
    },
    product_id:{
        type: Sequelize.INTEGER,
        references: {
            // This is a reference to another model
            model: Product,

            // This is the column name of the referenced model
            key: 'id'
        }
    }
})

export default Order;