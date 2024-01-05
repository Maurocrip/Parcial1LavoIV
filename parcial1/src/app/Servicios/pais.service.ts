import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  ruta: string = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  TraerPaises() {
    return this.http.get(this.ruta);
  }
}
