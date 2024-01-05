import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseService } from 'src/app/Servicios/firebase.service';
import { Container } from '../../../clases/container';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent 
{
  @Output() newItemEvent = new EventEmitter<any>();  
  @Input() container : Container = new Container;
  constructor(private firebase : FirebaseService){}
  
  Modificar()
  {
    this.firebase.ModificarContenedor(this.container);
    this.newItemEvent.emit()
  }
}
