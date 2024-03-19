import { ServerInitializer} from "../core/serverInitializer"


export interface SetupProtocol{
    boot():void
}

export interface ServerProtocol{
    startServer():void
    initialize():void
}

export interface ServerRouterProtocol{
    get():void
    post():void
    put():void
    patch():void
}