
import Sequelize from'sequelize'

import db from '../../../database/connection.js'


const VenderDetails = db.sequelize.define("vender_detail", {
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
     pan: { type: Sequelize.STRING, allowNull:false },
     

     //column-3 phone
     state :{type : Sequelize.STRING, allowNull:false },

     //cloumn-4 password
     district:{type:Sequelize.STRING, allowNull:false},
     AddressLine1:{type:Sequelize.STRING, allowNull:false},
     AddressLine2:{type:Sequelize.STRING},
     geoLocation:{type:Sequelize.STRING},

     

    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
})

export default VenderDetails;