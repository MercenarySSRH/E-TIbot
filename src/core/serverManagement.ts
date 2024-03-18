import  express, {Express}  from "express";
import { ServerProtocol } from "../interfaces/ServerProtocols";
import { serverConfig } from "../config/serverConfig";

export class ServerManagement implements ServerProtocol {
    private app:Express
    constructor(){
        this.app = express()
    }
    startServer(): void {
        this.initialize()
    }

    initialize(): void {
        const port = serverConfig.port
        this.app.listen(port,() =>{
            console.log('servidor rodando na porta',port)
        })
    }
}