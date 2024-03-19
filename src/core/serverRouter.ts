import { ServerRouterProtocol } from "../interfaces/ServerProtocols";
import   {RequestHandler, Router}  from "express";

export class ServerRouter extends ServerRouterProtocol{
  private router:Router = Router()
  
  constructor(public baseUrl:string){
    super()
    this.baseUrl = baseUrl
  }
  
  private getPath(url:string){
    const path= this.baseUrl+'/'+url
    return path
  }
  get(url: string, ...args:RequestHandler[]): void {
    const path = this.getPath(url)
    this.router.get(path,...args)
  }

  patch(url: string, ...args: RequestHandler[]): void {
    const path = this.getPath(url)
    this.router.patch(path,...args)
  }

  post(url: string, ...args: RequestHandler[]): void {
    const path = this.getPath(url)
    this.router.post(path,...args)
  }

  put(url: string, ...args: RequestHandler[]): void {
    const path = this.getPath(url)
    this.router.put(path,...args)
  }
}