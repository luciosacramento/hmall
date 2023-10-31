import { Injectable } from '@angular/core';
import { RestService } from 'src/app/core/rest.service';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private server: RestService) {}

  public getPage(value:number){
    return this.server.get(environment.API_url,`pagina/?id=${value}`);
  }

  public getLoja(value:string){
    return this.server.get(environment.API_url,`lista/?busca=${value}`);
  }

  public getConfig(){
    return this.server.get(environment.API_url,`configuracoes-personalizadas`);
  }

  public sendMail(value:Array<any>){
    return this.server.post(environment.API_url,`enviar-email`,value);
  }

}
