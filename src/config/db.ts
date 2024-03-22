import {Sequelize} from "sequelize";
import { dbConfig } from "./Config";

const {dbName,user,password,host} = dbConfig

const database = new Sequelize(dbName,user,password,{
  dialect:'mysql',
  host:host
})


database.authenticate().then((res) =>{
  console.log('servidor mysql conectado')
}).catch(() =>{
  console.log('erro ao conectar no servidor')
})

export {database}