import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/Servicios/firebase.service';
import { Producto } from 'src/app/clases/productos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent 
{
  public arrayProductos : Array<Producto> = [];
  constructor(private firebase : FirebaseService)
  {
    this.firebase.TraerProductos()
    .subscribe((respuesta)=>
    {
      this.arrayProductos = [];
      for(let element of respuesta)
      {    
        if(element["Stock"]>0)
        {
          this.arrayProductos.push(new Producto(element["Codigo"],element["Descripcion"],element["Stock"],element["Comestible"],element["Pais"],element["Precio"]));       
        }
      }
    });
  }
}
