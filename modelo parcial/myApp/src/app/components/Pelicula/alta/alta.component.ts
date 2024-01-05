import { Component } from '@angular/core';
import { Actor } from '../../Actor/alta/alta.component';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pelicula } from 'src/app/app.component';
import { ref, Storage } from '@angular/fire/storage';
import { uploadBytes } from '@firebase/storage';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent 
{
  public actorNombre : string = "";
  public file : any = null;
  public arrayPeliculas : any = [];
  public pelicula : Pelicula = new Pelicula();
  
  public grupo : FormGroup;
  constructor(private fb : FormBuilder, private storage : Storage )
  {
    this.grupo = this.fb.group({
      nombre : ["",[Validators.required]],
      tipo : ["",[Validators.required]],
      cantidadPersonas : ["",[Validators.required]],
      fecha :["",[Validators.required]],
      foto : ["",[Validators.required]],
    });
  };

  addItem(event : any)
  {
    this.pelicula.actor = event;
  }

  TraerLS()
  {
    let resultado : string | null = localStorage.getItem("ListaDePelis");
    if(resultado!=null)
    {
      this.arrayPeliculas = JSON.parse(resultado);
    }
  }

  Guardar()
  {
    if(this.pelicula.actor.pais != null)
    {
      if(this.grupo.status == "VALID")
      {
        this.TraerLS();

        this.pelicula.Id = this.arrayPeliculas.length;
        this.pelicula.fotoPelicula = 'imagenesPelicula/' + this.file.name;

        this.SubirImagen();

        this.arrayPeliculas.push(this.pelicula);
        localStorage.setItem("ListaDePelis", JSON.stringify(this.arrayPeliculas));

        alert("se guardo la pelicula");
      }
      else
      {
        alert("Hay algun campo incompleto o con algún error");
      }
    }
    else
    {
      alert("Seleccione un actor");
    }
  }

  GuardarImagen($event : any)
  {
    this.file = $event.target.files[0];
  }

  SubirImagen()
  {
    uploadBytes(ref(this.storage,  this.pelicula.fotoPelicula), this.file)
    .then(respuesta =>(console.log(respuesta)))
    .catch(error =>(console.log(error)));
  }
}
