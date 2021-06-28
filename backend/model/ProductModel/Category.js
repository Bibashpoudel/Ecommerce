import Sequelize from'sequelize'

import db from '../../database/connection.js'



const Category = db.sequelize.define('category',{
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
    cat_name:{
        type:Sequelize.STRING,
        allowNull:false
    }
});



export default Category;
