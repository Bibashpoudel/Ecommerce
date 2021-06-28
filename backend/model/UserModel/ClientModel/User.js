
import Sequelize from'sequelize'

import db from '../../../database/connection.js'




const User = db.sequelize.define('user', {
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
     //column-3 phone
     phone :{type : Sequelize.STRING, allowNull:false },
     //cloumn-4 password
     password:{type:Sequelize.STRING, allowNull:false},
     isAdmin:{type:Sequelize.BOOLEAN, default:false},

    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
})

export default User;