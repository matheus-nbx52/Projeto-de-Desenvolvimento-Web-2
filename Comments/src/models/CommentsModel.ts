import { DataType } from 'sequelize-typescript'
import {db} from '../database/db'
import { VideosModel } from './VideosModels'

export const CommentsModel = db.define('comments',{
    id:{
        type:DataType.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    userID:{
        type:DataType.INTEGER,
        allowNull:false
    },videos_idVideos:{
        type:DataType.INTEGER,
        references:{
            model:'Videos',
            key:'id'
        }
    },
    comentario:{
        type:DataType.TEXT,
        allowNull:false
    }

})

//Adicionar um comentario 
