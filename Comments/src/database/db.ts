import {Sequelize} from 'sequelize'

export const db = new Sequelize(
    'my_db',
    'admin',
    'mew12345',{
        dialect:'mysql',
        host:'database-1.cgrwnjzfomw8.us-east-1.rds.amazonaws.com',
        port:3306
    }   
)

