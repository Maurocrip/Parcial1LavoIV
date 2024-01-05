import { Component } from '@angular/core';
import { TablaPaisesComponent} from 'src/app/components/tabla-paises/tabla-paises.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './altaActor.component.html',
  styleUrls: ['./altaActor.component.css']
})
export class AltaActorComponent 
{
  public actor : Actor = new Actor()
  public paisNombre : string = "";
  public arrayActores : any = [];
  public grupo : FormGroup;
  constructor(private fb : FormBuilder )
  {
    this.grupo = this.fb.group({
      nombre : ["",[Validators.required]],
      apellido :["",[Validators.required]],
      usuario :["",[Validators.required]],
      email :["",[Validators.required, Validators.email]],
      zip :["",[Validators.required]],
      direccion :["",[Validators.required]],
    });
  };

  addItem(event : any)
  {
    this.actor.pais = event;this.actor.pais
    this.paisNombre = event.name.common;
  }

  TraerLS() : any
  {
    let resultado : string | null = localStorage.getItem("Actor");
    if(resultado!=null)
    {
      this.arrayActores = JSON.parse(resultado);
    }
  }

  Guardar()
  {
    if(this.actor.pais != null)
    {
      if(this.grupo.status == "VALID")
      {
        this.TraerLS();
        this.arrayActores.push(this.actor);
        localStorage.setItem("Actor", JSON.stringify(this.arrayActores));
        alert("se guardo el actor");
      }
      else
      {
        alert("Hay algun campo incompleto o con algún error");
      }
    }
    else
    {
      alert("Seleccione un pais");
    }
  }
}

export class Actor 
{
  public nombre : string;
  public apellido : string;
  public direccion : string;
  public usuario : string;
  public pais : object;
  public email : string;
  public zip : number;

  constructor(nombre : string = "", apellido : string  = "", dirección : string  = "", usuario : string  = "", pais : any  = null, 
  email : string  = "", zip : number  = 0)
  {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = dirección;
    this.usuario = usuario;
    this.pais = pais;
    this.email = email;
    this.zip = zip;
  }

}