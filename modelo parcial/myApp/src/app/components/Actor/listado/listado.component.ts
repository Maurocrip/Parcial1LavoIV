import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-listado-actor',
  templateUrl: './listadoActor.component.html',
  styleUrls: ['./listadoActor.component.css']
})
export class ListadoActorComponent {
  public arrayActores: Array<any> = [];
  @Output() newItemEvent = new EventEmitter<object>();  
  
  ngOnInit(): void {
    let resultado : string | null = localStorage.getItem("Actor");
    if(resultado!=null)
    {
      this.arrayActores = JSON.parse(resultado);
      console.log(this.arrayActores);
    }
    else
    {
      alert("ERROR!! No se encontro el localStorage");
    }
  }

  PasarActor(actor : object)
  {
    this.newItemEvent.emit(actor);
  }
}
