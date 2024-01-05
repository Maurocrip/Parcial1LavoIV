import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/Servicios/firebase.service';
import { GitHubService } from 'src/app/Servicios/git-hub.service';

@Component({
  selector: 'app-terminos-condiciones',
  templateUrl: './terminos-condiciones.component.html',
  styleUrls: ['./terminos-condiciones.component.css']
})
export class TerminosCondicionesComponent 
{

  @ViewChild('chequeo') chequeo: any;
  constructor( private router: Router, private firebase : FirebaseService, private git : GitHubService){}
  Verificar()
  {
    if(this.chequeo.nativeElement.checked)
    {
      this.firebase.GuardarUsuario(this.git.usuario);
    }
    this.router.navigate(['home']);
  }

  Cambiar()
  {
    if(this.chequeo.nativeElement.checked)
    {
      this.git.acepto = true;
    }
    else
    {
      this.git.acepto = false;
    }
  }
}
