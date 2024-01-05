import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/Servicios/firebase.service';
import { GitHubService } from 'src/app/Servicios/git-hub.service';
import { Usuario } from 'src/app/clases/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  public usuario : Usuario = new Usuario;
  public grupo : FormGroup;
  constructor(private fb : FormBuilder, private git : GitHubService, private firebase : FirebaseService)
  {
    this.grupo = this.fb.group({
      usuario : ["",[Validators.required]],
      contra :["",[Validators.required]],
    });
  };

  Guardar()
  {
    if(this.grupo.status == "VALID")
    {
      let anuncio : string = "No existe usuario";
      this.firebase.TraerUsuarios()
      .subscribe((respuesta)=>
      {
        for(let element of respuesta)
        {         
          if(element["Nombre"]==this.usuario.nombre && element["Contra"] == this.usuario.pass)
          {
            anuncio = "Logeado";
            this.git.personaLogueada = element["Tipo"];
            this.git.logueado = true;
            break;
          }
        }
        Swal.fire(anuncio);
      });
    }
    else
    {
      Swal.fire("Hay algun campo incompleto o con algún error");
    }
  }

  Admin()
  {
    this.usuario.nombre = "mauro";
    this.usuario.pass = "racioppi";
  }

  Empleado()
  {
    this.usuario.nombre = "empleado";
    this.usuario.pass = "empleadoporsiempre";
  }
}
