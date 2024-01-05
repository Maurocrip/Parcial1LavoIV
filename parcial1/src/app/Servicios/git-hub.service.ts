import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class GitHubService 
{
  public acepto : boolean = false;
  public usuario : Usuario = new Usuario;
  public personaLogueada : string = "";
  public logueado : boolean = false;
  public ruta: string = 'https://api.github.com/users/Maurocrip';

  constructor(private http: HttpClient) {}

  TraerGit() {
    return this.http.get(this.ruta);
  }
}
