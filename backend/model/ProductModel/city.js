
import Sequelize from'sequelize'

import db from '../../database/connection.js'




const City = db.sequelize.define('city', {
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
     district: { type: Sequelize.STRING, allowNull:false },
     state:{ type: Sequelize.STRING, allowNull:false },
     

     

    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
})

export default City;