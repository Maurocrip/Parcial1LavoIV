import { Component, Input } from '@angular/core';
import { Actor } from '../Actor/alta/alta.component';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css']
})
export class DetalleActorComponent {
  @Input() mostrar: boolean = false; 
  @Input() actor: Actor = new Actor; 
}
