import { ServerManagement } from "../core/serverManagement"


export interface SetupProtocol{
    boot():void
}

export interface ServerProtocol{
    startServer():void
    initialize():void
}