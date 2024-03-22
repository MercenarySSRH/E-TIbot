import { ServerConfig } from "../config/Config";
import { database } from "../config/db";
import { IServerSetup } from "./IServerSetup";
import express,{ Express } from "express";

 class Setup implements IServerSetup{
  private app:Express = express()

  startServer(): void {
    this.initialize()
  }

  initialize(): void {
    const port = ServerConfig.port
    this.app.use(express.json())
    database.sync()
    .then(() =>{
      this.app.listen(port,() =>{
        console.log(`servidor rodando na porta ${port}`)
      })
    })
  }

 
}
export function createSetup(){
  return new Setup()
}