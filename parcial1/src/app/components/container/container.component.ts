import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/Servicios/firebase.service';
import { Container } from 'src/app/clases/container';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent 
{
  public container : Container = new Container;
  public arrayContainer : Array<Container> = [];
  constructor(private firebase : FirebaseService)
  {
    this.firebase.TraerContainer()
    .subscribe((respuesta)=>
    {
      this.arrayContainer = [];
      for(let element of respuesta)
      {    
        this.arrayContainer.push(new Container(element["Codigo"],element["Color"],element["Empresa"],element["Capacidad"], element["Id"]));       
      }
    });
  }

  Seleccionar(container : Container)
  {
    this.container = container;
  }

  Evento()
  {
    this.container = new Container;
  }
}
