import { Component, Output, EventEmitter} from '@angular/core';
import { ServicioPaisService } from 'src/app/servicios/servicio-pais.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent 
{
  public arrayPaises: Array<any> = [];
  @Output() newItemEvent = new EventEmitter<object>();  

  constructor(private paises: ServicioPaisService) {}

  ngOnInit(): void {
    const consulta = this.paises.TraerPaises();

    consulta.subscribe((respuesta) => {
      console.log(respuesta);
      this.arrayPaises = respuesta as Array<any>;
      this.arrayPaises.sort((a, b) => a.name.common > b.name.common ? 1 : -1)
    });
  }

  PasarPais(pais : object)
  {
    this.newItemEvent.emit(pais);
  }
}
