export class Container 
{
  public codigo : string;
  public color : string;
  public empresa : string;
  public capacidad : number;
  public id : string;
  public arrayProductos : Array<any>;
  constructor(codigo : string = "", color : string ="", empresa : string="", capacidad : number =0, id : string = "", arrayProductos : Array<any> = []) 
  {
    this.codigo = codigo;
    this.color =color;
    this.empresa =empresa;
    this.capacidad = capacidad;
    this.id = id;
    this.arrayProductos = arrayProductos;
  }
}