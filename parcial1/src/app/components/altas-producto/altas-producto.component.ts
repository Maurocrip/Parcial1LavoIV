import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/Servicios/firebase.service';
import { Producto } from 'src/app/clases/productos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-altas-producto',
  templateUrl: './altas-producto.component.html',
  styleUrls: ['./altas-producto.component.css']
})
export class AltasProductoComponent {
  public paisNombre : string = "";
  public producto : Producto = new Producto;
  public arrayProductos : any = [];
  public grupo : FormGroup;
  constructor(private fb : FormBuilder, private firebase : FirebaseService )
  {
    this.grupo = this.fb.group({
      codigo : ["",[Validators.required]],
      descripcion :["",[Validators.required]],
      stock :["",[Validators.required]],
      precio :["",[Validators.required]],
    });
  };

  addItem(event : any)
  {
    this.producto.pais = event;
    this.paisNombre = event.name.common;
  }

  Guardar()
  {
    if(this.producto.pais != null)
    {
      if(this.grupo.status == "VALID")
      {
        this.firebase.GuardarProductos(this.producto);
        Swal.fire("Se guardo el producto");
        this.producto = new Producto;
        this.paisNombre = "";
      }
      else
      {
        Swal.fire("Hay algun campo incompleto o con algún error");
      }
    }
    else
    {
      Swal.fire("Seleccione un pais");
    }
  }

  Mostrar()
  {
    if(this.producto.comestible)
    {
      this.producto.comestible = false;
    }
    else
    {
      this.producto.comestible = true;
    }
  }
}
