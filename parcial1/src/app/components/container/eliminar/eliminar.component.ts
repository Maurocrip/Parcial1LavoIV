import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseService } from 'src/app/Servicios/firebase.service';
import { Container } from 'src/app/clases/container';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent 
{
  @Output() newItemEvent = new EventEmitter<any>();  
  @Input() container : Container = new Container;
  constructor(private firebase : FirebaseService){}
  Eliminar()
  {
    this.firebase.ElimiarContenedor(this.container);
    this.newItemEvent.emit();
  }
}
