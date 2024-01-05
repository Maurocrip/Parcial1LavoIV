import { Component, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { Pelicula } from 'src/app/app.component';
import { getDownloadURL, ref, Storage } from '@angular/fire/storage';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {
  arrayPelis : Array<Pelicula> = [];
  @Output() newItemEvent = new EventEmitter<Pelicula>(); 
  
  constructor(private storage : Storage)
  {
    this.TraerLS();
  }

  TraerLS()
  {
    let resultado : string | null = localStorage.getItem("ListaDePelis");
    if(resultado!=null)
    {
      this.arrayPelis = JSON.parse(resultado);
      this.arrayPelis.forEach(pelicula => 
      {
        const imagReferencia = ref(this.storage, pelicula.fotoPelicula);
        getDownloadURL(imagReferencia)
        .then(elemt=>
        {
          pelicula.fotoPelicula = elemt;
        })
      });
    }
    else
    {
      Swal.fire("ERROR!! No se encontro el localStorage");
    }
  }

  PasarPelicula(pelicula : Pelicula)
  {
    this.newItemEvent.emit(pelicula);  
  }
}
