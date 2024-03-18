import {Sequelize} from'sequelize'

export class DbManager {

     createDatabase():Sequelize{
        const database = new Sequelize('ssrh','root','',{
            dialect:'mysql',
            host:'localhost'
        })
        return database
    }
}