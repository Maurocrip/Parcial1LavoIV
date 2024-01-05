import { Component, ViewChild } from '@angular/core';
import { FirebaseService } from 'src/app/Servicios/firebase.service';
import { Container } from 'src/app/clases/container';
import { Producto } from 'src/app/clases/productos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carga-container',
  templateUrl: './carga-container.component.html',
  styleUrls: ['./carga-container.component.css']
})
export class CargaContainerComponent 
{
  @ViewChild('cantidad') cantidad: any;
  public arrayProductos : Array<Producto> = [];
  public mostrar : boolean = false;
  public agregar : boolean = false;
  public container : Container = new Container;
  public producto : Producto = new Producto;
  public arrayContainer : Array<Container> = [];
  constructor(private firebase : FirebaseService)
  {
    this.firebase.TraerContainer()
    .subscribe((respuesta)=>
    {
      this.arrayContainer = [];
      for(let element of respuesta)
      {    
        this.arrayContainer.push(new Container(element["Codigo"],element["Color"],element["Empresa"],element["Capacidad"], element["Id"], element["Productos"]));       
      }
    });

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

  Seleccionar(container : Container)
  {
    this.mostrar = true;
    this.container = container;
  }

  Volver()
  {
    this.mostrar = false;
  }

  VolverProducto()
  {
    this.agregar = false;
    this.mostrar = true;
  }

  ProductoSelec(producto : Producto)
  {
    this.producto = producto;
    this.agregar=true;
    this.mostrar = false;
  }

  Agregar()
  {
    let cantidad : number = (Number) (this.cantidad.nativeElement.value);
    if(cantidad<=this.producto.stock)
    {
      let total : number = cantidad;
      for(let producto of this.container.arrayProductos)
      {
        total += producto.Cantidad;
      }
  
      if(total<=this.container.capacidad)
      {
        this.container.arrayProductos.push({Producto: {nombre:this.producto.descripcion, codigo: this.producto.codigo, 
          precio: this.producto.precio, pais: this.producto.pais}, Cantidad : cantidad})
        console.log(this.container);
        this.firebase.AgregarContenedorProductos(this.container);
      }
      else
      {
        Swal.fire("supera la capcidad del container");
      }
    }
    else
    {
      Swal.fire("supera la capcidad de stock del producto");
    }
  }

}
