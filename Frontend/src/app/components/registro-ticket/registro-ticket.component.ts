import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-registro-ticket',
  templateUrl: './registro-ticket.component.html',
  styleUrls: ['./registro-ticket.component.css']
})
export class RegistroTicketComponent implements OnInit {


  listaTickets!:Array<Ticket>;
  tipo!:string;

  constructor(private ticketService:TicketService, private router:Router) { 
    this.tipo="todos";
    
  }

  ngOnInit(): void {
    this.obtenerTickets();
  }

  obtenerTickets(){
    this.listaTickets=new Array<Ticket>();
    this.ticketService.getTickets().subscribe(
      (result) =>{
        result.forEach( (element:any) => {
          let unTicket:Ticket = new Ticket();
          Object.assign(unTicket, element);
          this.listaTickets.push(unTicket);
        });
      },
      error => {alert("Error al cargar las lista de Espectadores");}
    )
    console.log(this.listaTickets);
  }

  registrarTicket(){
    this.router.navigate(['listaEspectadores']);
  }

  eliminarTicket(id:string){
    this.ticketService.deleteTicket(id).subscribe(
      (result)=>{
        if(result.status=="1"){
          alert(result.msg);
        }else{
          alert(result.msg);
        }
      },
      error =>{alert("Error en la eliminacion");}
    )
    this.seleccionarFiltro();
  }

  seleccionarFiltro(){
    if(this.tipo=="todos"){
      this.obtenerTickets();
    }else{
      this.filtrarTicket();
    }
  }
  filtrarTicket(){
    this.listaTickets=new Array<Ticket>();
    this.ticketService.getTicketsFiltrados(this.tipo).subscribe(
      (result) =>{
        result.forEach( (element:any) => {
          let unTicket:Ticket = new Ticket();
          Object.assign(unTicket, element);
          this.listaTickets.push(unTicket);
        });
      },
      error => {alert("Error al cargar las lista de Espectadores");}
    )
    console.log(this.listaTickets);
  }

  modificarTicket(dni:string){
    this.router.navigate(['formularioTicket', dni, 0]);
  }
}
