import Sequelize from 'sequelize'


import db from '../database/connection.js'
import Category from './Category.js';


const SubCategory = db.sequelize.define("sub_category", {
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    sub_cat_name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    
    cat_id: {
        type: Sequelize.INTEGER,

        references: {
            // This is a reference to another model
            model: Category,

            // This is the column name of the referenced model
            key: 'id'
        }
    },



})




export default SubCategory;