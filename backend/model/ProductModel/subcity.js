
import Sequelize from'sequelize'

import db from '../../database/connection.js'
import City from './city.js';




const SubCity = db.sequelize.define('sub_city', {
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

     // Column-2, name
     name: { type: Sequelize.STRING, allowNull:false },
     city_id:{
        type: Sequelize.INTEGER,

        references: {
            // This is a reference to another model
            model: City,

            // This is the column name of the referenced model
            key: 'id'
        }
     },

     

    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
})

export default SubCity;