import { Component, Input } from '@angular/core';
import { Pelicula } from 'src/app/app.component';
import { Actor } from '../Actor/alta/alta.component';

@Component({
  selector: 'app-peliculas-actuadas',
  templateUrl: './peliculas-actuadas.component.html',
  styleUrls: ['./peliculas-actuadas.component.css']
})
export class PeliculasActuadasComponent 
{
  @Input() arrayPeliculas : Array<Pelicula> = [];
  @Input() mostrar: boolean = false;
}
