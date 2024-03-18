import express from 'express'
import { SetupProtocol } from '../interfaces/ServerProtocols'
import { ServerManagement } from '../core/serverManagement'


export class Setup implements SetupProtocol{
    private server:ServerManagement
    constructor(){
        this.server = new ServerManagement()
    }
    boot(){    
       this.server.startServer()
    }

}