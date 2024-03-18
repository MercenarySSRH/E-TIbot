import express from 'express'
import { DbManager } from './config/database'
import { Setup } from './setup/setup'

const app = new Setup().start()
const database = new DbManager().createDatabase()

app.use(express.urlencoded({extended:true}))
app.use(express.json())


 database.sync().then(() =>{
    app.listen(5000)  
})