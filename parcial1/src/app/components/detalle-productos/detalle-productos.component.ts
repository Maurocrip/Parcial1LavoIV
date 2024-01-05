import { Component, Input } from '@angular/core'; 
import { Producto } from 'src/app/clases/productos';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent 
{
  @Input() producto : Producto = new Producto;
}
