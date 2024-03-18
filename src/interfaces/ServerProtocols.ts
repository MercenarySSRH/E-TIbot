import { ServerManagement } from "../core/serverInitializer"


export interface SetupProtocol{
    boot():void
}

export interface ServerProtocol{
    startServer():void
    initialize():void
}