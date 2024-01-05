import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent {
  @Input() mostrar: boolean = false; 
  @Input() pais: any =  []; 
}
