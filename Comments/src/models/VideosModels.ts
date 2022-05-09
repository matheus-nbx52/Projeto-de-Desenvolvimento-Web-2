import { DataType } from 'sequelize-typescript'
import {db} from '../database/db'

import{CommentsModel} from './CommentsModel'

export const VideosModel = db.define('Videos',{
    id:{
        type:DataType.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    videoTitle:{
        type:DataType.STRING,
        allowNull:false
    },
    videoUrl:{
        type:DataType.STRING,
        allowNull:false,
        unique:true
    },
    likeNumber:{
        type:DataType.INTEGER,

        allowNull:true
    },
    subject:{
        type:DataType.STRING,
        allowNull:false
    },
    userID:{
        type:DataType.STRING,
        allowNull:false
    }
    
    // o sequelize cria sozinho um updatedAt

})

VideosModel.hasMany(CommentsModel);