import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moneda } from 'src/app/models/moneda';
import { Transaccion } from 'src/app/models/transaccion';
import { ConvertService } from 'src/app/services/convert.service';
import { MonedasService } from 'src/app/services/monedas.service';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-conversor-divisa',
  templateUrl: './conversor-divisa.component.html',
  styleUrls: ['./conversor-divisa.component.css']
})
export class ConversorDivisaComponent implements OnInit {

  origen!:string;
  destino!:string;
  valor!:string;
  resultado!:string;
  simbolosDeMonedas!:Array<Moneda>;
  moneda!:Moneda;
  transaccion!:Transaccion;

  constructor(private convertService:ConvertService, private currencie:MonedasService, private transaccionService:TransaccionService, private router: Router) { 
    this.transaccion=new Transaccion();
    this.simbolosDeMonedas= new Array<Moneda>();
  }

  ngOnInit(): void {
   this.cargarMonedas();
  }
  
  convertirMoneda(){
    this.convertService.postConvert(this.transaccion.cantidadOrigen.toString(),this.transaccion.monedaOrigen,this.transaccion.monedaDestino).subscribe(
      (result)=>{
        console.log(result);
        this.transaccion.cantidadDestino=result.result;
        this.transaccion.tasaConversion=this.transaccion.cantidadDestino/this.transaccion.cantidadOrigen;
        console.log(this.transaccion);
        this.registrarTransaccion();
      },
      error => {alert("Error al convertir moneda")}
    );
    
  }

  registrarTransaccion(){
    this.transaccionService.createTransaccion(this.transaccion).subscribe(
      (result)=>{
        if(result==1){
          alert(result.msg);
        }else{
          alert(result.msg);
        }
      },
      error=>{alert(error.msg);}
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

  verRegistro(){
    this.router.navigate(["registroDeTransacciones"]);
  }
}
