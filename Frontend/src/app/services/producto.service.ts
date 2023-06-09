import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http:HttpClient) { }


  getProductos():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

        }
      )
    };
    return this._http.get("http://localhost:3000/api/apiProducto/destacados", httpOptions);
  }

  createProducto(producto: Producto):Observable<any>{
    console.log(producto);
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-type":"application/json"
        }
      ), 
      params: new HttpParams()
    };
    let body = JSON.stringify(producto);
    return this._http.post("http://localhost:3000/api/apiProducto/producto", body , httpOptions);
  }
}
