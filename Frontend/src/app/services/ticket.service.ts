import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http:HttpClient) { }

  
  getTickets():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

        }
      ),
      params: new HttpParams()
    };
    return this._http.get("http://localhost:3000/api/apiTicket", httpOptions);
  }

  getTicket(id:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

        }
      ),
      params: new HttpParams()
        .set("id", id)
    };
    return this._http.get("http://localhost:3000/api/apiTicket/ticket", httpOptions);
  }

  getTicketsFiltrados(categoriaEspectador:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

        }
      ),
      params: new HttpParams()
        .set("categoriaEspectador", categoriaEspectador)
    };
    return this._http.get("http://localhost:3000/api/apiTicket/ticket-espectador", httpOptions);
  }
  createTicket(ticket: Ticket):Observable<any>{
    console.log("Hola aqui entre al service")
    console.log(ticket);
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-type":"application/json"
        }
      ), 
      params: new HttpParams()
    };
    let body = JSON.stringify(ticket);
    return this._http.post("http://localhost:3000/api/apiTicket/ticket", body , httpOptions);
  }

  deleteTicket(id:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

        }
      ),
      params: new HttpParams()
        .set('id', id)
    };
    return this._http.delete("http://localhost:3000/api/apiTicket/ticket", httpOptions);
  }

  putTicket(ticket: Ticket):Observable<any>{
    console.log("Hola aqui entre al service para modificar")
    console.log(ticket);
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-type":"application/json"
        }
      ), 
      params: new HttpParams()
      .set("id", ticket._id)
    };
    let body = JSON.stringify(ticket);
    return this._http.put("http://localhost:3000/api/apiTicket/ticket", body , httpOptions);
  }
}
