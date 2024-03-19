import { ServerInitializer} from "../core/serverInitializer"
import { Router,RequestHandler } from "express"
export interface SetupProtocol{
    boot():void
}

export interface ServerProtocol{
    startServer():void
    initialize():void
}

export abstract class ServerRouterProtocol{
      abstract baseUrl:string
     abstract get(url:string,...args:RequestHandler[]):void
     abstract post(url:string,...args:RequestHandler[]):void
     abstract put(url:string,...args:RequestHandler[]):void
     abstract patch(url:string,...args:RequestHandler[]):void
}