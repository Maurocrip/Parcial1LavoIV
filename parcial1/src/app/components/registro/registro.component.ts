import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GitHubService } from 'src/app/Servicios/git-hub.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent 
{
  public formGroup : FormGroup;
  constructor( private fb : FormBuilder, private router: Router, public git : GitHubService)
  {
    this.formGroup = this.fb.group({
      email : ["",[Validators.required,Validators.email]],
      contraseña :["",[Validators.required]]
    });
  }

  Registrarse()
  {
    if(this.formGroup.status == "VALID")
    {
      this.git.usuario.tipo = "empleado";
      this.router.navigate(['TerminoCondiciones']);
    }
    else
    {
      Swal.fire("Hay algun campo incompleto o invalidos");
    }
  }

}
