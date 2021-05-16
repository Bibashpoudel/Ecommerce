import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    "bibash",  ///database name
    'root',     //database username
    'root',     //database Password
    { 
        host: '127.0.0.1',  //database ip
        dialect:'mysql',   //database type
        operatorsAliases:false  
    }
)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;

