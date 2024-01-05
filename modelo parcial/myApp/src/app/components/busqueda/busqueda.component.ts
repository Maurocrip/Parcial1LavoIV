import { Component, ViewEncapsulation } from '@angular/core';
import { Pelicula } from 'src/app/app.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  peliculaSelec : Pelicula = new Pelicula(); 
  mostrar : boolean = false;

  PeliculaSeleccionada(pelicula : Pelicula)
  {
    this.peliculaSelec = pelicula;
    this.mostrar = true;
  }

}
