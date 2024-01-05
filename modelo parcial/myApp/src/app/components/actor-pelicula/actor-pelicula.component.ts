import { Component } from '@angular/core';
import { Actor } from '../Actor/alta/alta.component';
import { Pelicula } from 'src/app/app.component';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent {
  public mostrarPe : boolean = false;
  public mostrarPa : boolean = false;
  public mostrarDe : boolean = false;
  public pais : any = [];
  public actor : Actor = new Actor;
  public arrayPeliculas : Array<Pelicula> = [];
  public arayPeliculasActuadas : Array<Pelicula> = [];
  
  ActorSeleccionado(evento : any)
  {
    switch (evento.tipo)
    {
      case "actor":
        this.actor = evento.actor;
        this.mostrarDe = true;
      break;
 
      case "peliculas":
        this.arayPeliculasActuadas = [];
        this.TraerLS();
        this.verificarPelicula(evento.actor);
        this.mostrarPe = true;
      break;

      case "pais":
        this.pais = evento.pais;
        this.mostrarPa = true;
      break;
    }

  }

  verificarPelicula(actor : Actor)
  {
    this.arrayPeliculas.forEach(pelicula => 
    {
      if(pelicula.actor.nombre == actor.nombre)
      {
        this.arayPeliculasActuadas.push(pelicula);
      }
    });
  }

  TraerLS()
  {
    let resultado : string | null = localStorage.getItem("ListaDePelis");
    if(resultado!=null)
    {
      this.arrayPeliculas = JSON.parse(resultado);
    }
    else
    {
      alert("ERROR!! No se encontro el localStorage");
    }
  }
}
