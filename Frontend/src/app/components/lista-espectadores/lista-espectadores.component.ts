import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { EspectadorService } from 'src/app/services/espectador.service';

@Component({
  selector: 'app-lista-espectadores',
  templateUrl: './lista-espectadores.component.html',
  styleUrls: ['./lista-espectadores.component.css']
})
export class ListaEspectadoresComponent implements OnInit {

  listaEspectadores!:Array<Espectador>;
  constructor(private espectadorService:EspectadorService, private router:Router) { 
    this.listaEspectadores=new Array<Espectador>();
    this.obtenerEspectadores();
  }

  ngOnInit(): void {
  }

  obtenerEspectadores(){
    this.espectadorService.getEspectadores().subscribe(
      (result) =>{
        result.forEach( (element:any) => {
          let unEspectador:Espectador = new Espectador();
          Object.assign(unEspectador, element);
          this.listaEspectadores.push(unEspectador);
        });
      },
      error => {alert("Error al cargar las lista de Espectadores");}
    )
    console.log(this.listaEspectadores);
  }
  
  registrarTicket(dni:string){
    this.router.navigate(['formularioTicket', dni, 1]);
  }
}
