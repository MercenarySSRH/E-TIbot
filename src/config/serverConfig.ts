import * as dotenv from "dotenv"
import {join} from "path"

dotenv.config({
    path:join(__dirname,'..','.env.local')
})

export const serverConfig = {
    port : process.env.APP_SERVER_PORT
}

export const dbConfig = {
    host:process.env.APP_HOST_DATABASE
}