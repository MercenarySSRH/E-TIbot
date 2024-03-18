import  express, {Express}  from "express";
import { ServerProtocol } from "../interfaces/ServerProtocols";
import { serverConfig } from "../config/serverConfig";

import { database } from "../config/database";
import { Sequelize } from "sequelize";

export class ServerInitializer implements ServerProtocol {
    private app:Express
    private database:Sequelize

    constructor(){
        this.app = express()
        this.database = database
    }

    startServer(): void {
        this.initialize()
    }

    initialize(): void {
        const port = serverConfig.port
        this.database.sync().then(() =>{
            this.app.listen(port,() =>{
                console.log('servidor rodando na porta',port)
            })
        })
    }
}