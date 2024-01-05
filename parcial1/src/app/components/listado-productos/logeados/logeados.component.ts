import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/Servicios/firebase.service';
import { Producto } from 'src/app/clases/productos';

@Component({
  selector: 'app-logeados',
  templateUrl: './logeados.component.html',
  styleUrls: ['./logeados.component.css']
})
export class LogeadosComponent 
{
  public producto :  Producto = new Producto;
  public pais :  any = null;
  public arrayProductos : Array<Producto> = []
  constructor(private firebase : FirebaseService)
  {
    this.firebase.TraerProductos()
    .subscribe((respuesta)=>
    {
      this.arrayProductos = [];
      for(let element of respuesta)
      {    
        this.arrayProductos.push(new Producto(element["Codigo"],element["Descripcion"],element["Stock"],element["Comestible"],element["Pais"],element["Precio"]));       
      }
    });
  }

  Mostrar(producto:Producto)
  {
    this.producto = producto;
    this.pais = producto.pais;
  }

}

