import { Component, ViewEncapsulation } from '@angular/core';
import { Actor } from './components/Actor/alta/alta.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

export class Pelicula {
  public Id : number;
  public nombre: string;
  public fechaEstreno : string;
  public tipo: string;
  public fotoPelicula : string;
  public cantidadPersonas: number;
  public actor : Actor;

  constructor(id : number =0 , nombre :string="", fechaEstreno : string=" ", tipo: string= "", fotoPelicula : string  = "", 
              cantidadPersonas: number =0, actor : Actor = new Actor())
  {
    this.Id =id;
    this.cantidadPersonas = cantidadPersonas;
    this.fechaEstreno = fechaEstreno;
    this.fotoPelicula = fotoPelicula;
    this.nombre = nombre;
    this.tipo = tipo;
    this.actor = actor;
  }
}

