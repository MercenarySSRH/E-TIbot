import {Sequelize} from'sequelize'
import { dbConfig } from './serverConfig'


export const database = new Sequelize('ssrh','root','',{
    dialect:'mysql',
    host:dbConfig.host
})