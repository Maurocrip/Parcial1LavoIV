export class Usuario 
{
  public nombre : string;
  public pass : string;
  public tipo : string;
  constructor(nombre : string = "", pass : string ="", tipo : string="") 
  {
    this.nombre = nombre;
    this.pass =pass;
    this.tipo =tipo;
  }
}