import { Component } from '@angular/core';
import { GitHubService } from 'src/app/Servicios/git-hub.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent 
{
  public login : string = "";
  public id : string = "";
  public html_url : string = "";
  public avatar_url : string = "";
  public segidores : number = 0;
  public siguiendo : number = 0;
  constructor(private gitHub : GitHubService){};

  ngOnInit(): void {
    const consulta = this.gitHub.TraerGit();

    consulta.subscribe((respuesta : any) => {
      this.login = respuesta.login;
      this.id = respuesta["id"];
      this.html_url = respuesta["html_url"];
      this.avatar_url = respuesta["avatar_url"];
      this.segidores = respuesta["followers"];
      this.siguiendo = respuesta["following"];
    });
  }
}
