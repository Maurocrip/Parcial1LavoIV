import { Component, EventEmitter, Output } from '@angular/core';
import { Actor } from '../Actor/alta/alta.component';
import { Pelicula } from 'src/app/app.component';

@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.css']
})
export class TablaActoresComponent {

  public arrayActores : Array<any>;
  @Output() newItemEvent = new EventEmitter<any>(); 
  constructor()
  {
    this.arrayActores = [];
    this.TraerLS();
  }

  VerPeliculas(actor : Actor, tipo :string)
  {
    this.newItemEvent.emit({actor : actor, tipo : tipo});  
  }

  DetallePais(pais : any, tipo :string)
  {
    this.newItemEvent.emit({pais : pais, tipo : tipo});  
  }

  DetalleActor(actor : Actor, tipo :string)
  {
    this.newItemEvent.emit({actor : actor, tipo : tipo});  
  }

  TraerLS()
  {
    let resultado : string | null = localStorage.getItem("Actor");
    if(resultado!=null)
    {
      this.arrayActores = JSON.parse(resultado);
    }
    else
    {
      alert("ERROR!! No se encontro el localStorage");
    }
  }
}
