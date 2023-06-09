import { Component, OnInit } from '@angular/core';
import { Moneda } from 'src/app/models/moneda';
import { Transaccion } from 'src/app/models/transaccion';
import { MonedasService } from 'src/app/services/monedas.service';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-registro-transaccion',
  templateUrl: './registro-transaccion.component.html',
  styleUrls: ['./registro-transaccion.component.css']
})
export class RegistroTransaccionComponent implements OnInit {

  moneda!:Moneda;
  simbolosDeMonedas!:Array<Moneda>;
  transaccion!:Transaccion;
  arrayTransacciones!:Array<Transaccion>;
  arryTransaccionesFiltradas!:Array<Transaccion>;
  mostrarFiltros:boolean=false;
  mostrarTodo:boolean=true;

  constructor(private transaccionService:TransaccionService,  private currencie:MonedasService) {
    this.simbolosDeMonedas=new Array<Moneda>();
    this.transaccion=new Transaccion();
    this.obtenerTransacciones();
    this.cargarMonedas();
   }

  ngOnInit(): void {

  }

  obtenerTransacciones(){
    this.mostrarFiltros=false;
    this.mostrarTodo=true;
    this.transaccionService.getTransacciones().subscribe(
      (result) =>{
        this.arrayTransacciones=new Array<Transaccion>();
        result.forEach( (element:any) => {
          let unaTransaccion:Transaccion = new Transaccion();
          Object.assign(unaTransaccion, element);
          this.arrayTransacciones.push(unaTransaccion);
        });
      },
      error => {alert("Error al cargar los productos");}
    )
  }

  cargarMonedas(){
    this.currencie.getCurrencies().subscribe(
      (result)=>{

        result.forEach((element:any) => {
          this.moneda=new Moneda();
          this.moneda.name=element.name;
          this.moneda.symbol=element.symbol;
          this.simbolosDeMonedas.push(this.moneda);
        });
        console.log(this.simbolosDeMonedas);
      },
      error => {alert("Error en la peticion"); }
    )
  }

  filtrarTransaaciones(){
    this.mostrarTodo=false;
    this.mostrarFiltros=true;
    this.transaccionService.getTransaccionesPorMonedas(this.transaccion.monedaOrigen, this.transaccion.monedaDestino).subscribe(
      (result)=>{
        this.arryTransaccionesFiltradas=new Array<Transaccion>();
        result.forEach((element:any) => {
          let unaTransaccion:Transaccion = new Transaccion();
          Object.assign(unaTransaccion, element);
          this.arryTransaccionesFiltradas.push(unaTransaccion);
        });
      },
      error => {alert("Error filtrar");}
    )
  }
}


