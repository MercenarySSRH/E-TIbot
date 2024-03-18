import { Sequelize } from "sequelize";

export interface SetupProtocol{
    start():Sequelize
}