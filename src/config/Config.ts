export const ServerConfig = {
  port:process.env.APP_SERVER_PORT 
}

export const dbConfig = {
  user:process.env.DATABASE_USER || 'root',
  password:process.env.DATABASE_PASSWORD ||'',
  dbName:process.env.DATABASE_NAME || 'ssrh',
  host:process.env.APP_HOST || 'localhost'
}