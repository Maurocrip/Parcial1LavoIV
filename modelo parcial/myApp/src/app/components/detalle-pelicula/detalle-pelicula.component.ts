import { Component, Input } from '@angular/core';
import { Pelicula } from 'src/app/app.component';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent 
{
  @Input() mostrar: boolean = false; 
  @Input() pelicula: Pelicula = new Pelicula; 
}
