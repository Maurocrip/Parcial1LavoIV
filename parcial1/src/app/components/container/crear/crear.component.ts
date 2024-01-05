import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/Servicios/firebase.service';
import { Container } from 'src/app/clases/container';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent 
{
  public contenedor : Container = new Container;
  constructor(private firebase : FirebaseService){}
  Guardar()
  {
    this.firebase.GuardarContainer(this.contenedor);
    this.contenedor = new Container;
  }
}
