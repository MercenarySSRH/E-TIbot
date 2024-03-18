import express from 'express'


export class Setup{

    start(){
        const app = express()
        return app
    }

}