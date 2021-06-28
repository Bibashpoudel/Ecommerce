
import Sequelize from 'sequelize'

import db from '../../database/connection.js'
import Category from './Category.js';
import City from './city.js';
import SubCategory from './subCategory.js';
import SubCity from './subcity.js';

// import Category from './Category.js';


const Product = db.sequelize.define('product',{
    id:{
        // Sequelize module has INTEGER Data_Type.
        type:Sequelize.INTEGER,
  
        // To increment user_id automatically.
        autoIncrement:true,
  
        // user_id can not be null.
        allowNull:false,
  
        // For uniquely identify user.
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    prod_slug:{
        type:Sequelize.STRING,   
    },
    image:{
        type:Sequelize.BLOB,
    }
    ,
    cat_id: {
        type: Sequelize.INTEGER,
        references: {
            // This is a reference to another model
            model: Category,

            // This is the column name of the referenced model
            key: 'id'
        }
    },
    sub_cat_id: {
        type: Sequelize.INTEGER,

        references: {
            // This is a reference to another model
            model: SubCategory,

            // This is the column name of the referenced model
            key: 'id'
        }
    },
    city_id: {
        type: Sequelize.INTEGER,

        references: {
            // This is a reference to another model
            model: City,

            // This is the column name of the referenced model
            key: 'id'
        }
    },
    sub_city_id: {
        type: Sequelize.INTEGER,

        references: {
            // This is a reference to another model
            model: SubCity,

            // This is the column name of the referenced model
            key: 'id'
        }
    },
    // seller_id:{
    //     type: Sequelize.INTEGER,

    //     references: {
    //         // This is a reference to another model
    //         model: Vender,

    //         // This is the column name of the referenced model
    //         key: 'id'
    //     }
        
    // },

    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,

})



export default Product;