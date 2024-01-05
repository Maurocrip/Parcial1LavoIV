export class Producto 
{
  public codigo : string;
  public descripcion : string;
  public stock : number;
  public comestible : boolean;
  public pais : any;
  public precio : number;

  constructor(codigo : string = "", descripcion : string  = "", stock : number  = 0, comestible : boolean  = false, pais : any  = null, precio : number  = 0)
  {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.stock = stock;
    this.comestible = comestible;
    this.pais = pais;
    this.precio = precio;
  }
}