import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-pais',
  templateUrl: './listado-pais.component.html',
  styleUrls: ['./listado-pais.component.css']
})
export class ListadoPaisComponent 
{
  @Input() pais : any = null;
}
