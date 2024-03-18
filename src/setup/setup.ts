import express from 'express'
import { SetupProtocol } from '../interfaces/ServerProtocols'
import { ServerInitializer } from '../core/serverInitializer'


export class Setup implements SetupProtocol{
    private server:ServerInitializer
    constructor(){
        this.server = new ServerInitializer()
    }
    boot(){    
       this.server.startServer()
    }

}