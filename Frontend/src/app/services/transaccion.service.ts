import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaccion } from '../models/transaccion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private _http:HttpClient) { }

  getTransacciones():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

        }
      )
    };
    return this._http.get("http://localhost:3000/api/apiTransaccion", httpOptions);
  }

  createTransaccion(transaccion:Transaccion):Observable<any>{
    console.log(transaccion);
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-type":"application/json"
        }
      ), 
      params: new HttpParams()
    };
    let body = JSON.stringify(transaccion);
    return this._http.post("http://localhost:3000/api/apiTransaccion/transaccion", body , httpOptions);
  }
 
  getTransaccionesPorMonedas(monedaOrigen:string, monedaDestino:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

        }
      ), 
      params: new HttpParams()
        .set('monedaOrigen', monedaOrigen)
        .set('monedaDestino', monedaDestino)
    };
    return this._http.get("http://localhost:3000/api/apiTransaccion/monedas-origen-destino", httpOptions);
  }
}
