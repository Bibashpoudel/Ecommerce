import Sequelize from 'sequelize'


import Sequelize from'sequelize'

import db from '../../../database/connection.js'




const UserDetails= db.sequelize.define('user_details', {
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
    
     state:{ type: Sequelize.STRING, allowNull:false },
     district:{ type: Sequelize.STRING, allowNull:false },
     AddressLine1:{type:Sequelize.STRING, allowNull:false},
     AddressLine2:{type:Sequelize.STRING},
     

     

    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
})

export default UserDetails;