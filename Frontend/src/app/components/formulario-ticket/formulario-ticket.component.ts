import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { EspectadorService } from 'src/app/services/espectador.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-formulario-ticket',
  templateUrl: './formulario-ticket.component.html',
  styleUrls: ['./formulario-ticket.component.css']
})
export class FormularioTicketComponent implements OnInit {

  

  ticket:Ticket;
  accion!:string;
  espectador!:Espectador;

  constructor(private espectadorService:EspectadorService, private ticketService:TicketService, private router:Router, private activatedRoute:ActivatedRoute) { 
    this.ticket=new Ticket();
    this.espectador=new Espectador();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['id'] == '0'){
        this.accion="update";
        console.log(this.accion);
        console.log(params['dni']);
        this.obtenerTicket(params['dni']);
      }else{
        this.accion="new";
        this.obtenerEspectador(params['dni']);
      }
    });
  }

  public guardarTicket(){;
    this.ticket.espectador=this.espectador;
    this.ticket.fechaCompra = new Date().toLocaleDateString();
    this.ticketService.createTicket(this.ticket).subscribe(
      (result) =>{
        if(result.status=="1"){
          alert(result.msg);
        }else{
          alert(result.msg);
        }
      },
      error =>{alert("Error en el registro");}
    )
    this.router.navigate(['listaTickes']);
  }

  public obtenerTicket(id:string){
    this.ticketService.getTicket(id).subscribe(
      (result)=>{
        result.forEach( (element:any) => {
          let unTicket:Ticket = new Ticket();
          Object.assign(unTicket, element);
          this.ticket=unTicket;
          this.espectador=unTicket.espectador;
        })
      },
      error => {alert("Error el Espectadores");}
    )
  }


  public modificarTicket(){
    console.log("Ingrese al modificar")
    this.ticketService.putTicket(this.ticket).subscribe(
      (result) =>{
        if(result.status=="1"){
          alert(result.msg);
        }else{
          alert(result.msg);
        }
      },
      error =>{alert("Error en el registro");}
    )
    this.router.navigate(['listaTickes']);
  }
  
 
  
  obtenerEspectador(dni:string){
    console.log(dni);
    this.espectador=new Espectador();
    this.espectadorService.getEspectador(dni).subscribe(
      (result)=>{
        console.log(result);
        result.forEach( (element:any) => {
        Object.assign(this.espectador, element);
        })
      },
      error => {alert("Error el Espectadores");}
    )
    
  }

  public cancelarOperacion(){
    this.router.navigate(['listaEspectadores']);
  }

}
