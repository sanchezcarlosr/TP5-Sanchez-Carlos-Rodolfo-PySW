import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {

  producto!:Producto;
  accion:string="new";

  constructor(private productoService:ProductoService ,private router:Router, private activatedRoute:ActivatedRoute, private domSanitizer: DomSanitizer) {
    this.producto=new Producto();

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['id'] === '0'){
        this.accion="new";
      }else{
        alert("Error en el alta de un producto");
      }
    });
  }

  public guardarTicket(){
    console.log(this.producto);
    this.productoService.createProducto(this.producto).subscribe(
      (result)=>{
        if(result==1){
          alert(result.msg);
        }else{
          alert(result.msg);
        }
      },
      error=>{alert(error.msg);}
    )
    this.router.navigate(["catalogoDeProductos"]);
  }


  
  onFileSelected(event: any) {
    const files = event.target.files[0];
  
    if(files.size > 80000){
      alert("El tamaño maximo es de 80Kb");
      event.target.value="";
    }else{
      const reader = new FileReader();
      reader.onload = () => {
        let base64 = reader.result as string;
        this.producto.imagen=base64;
      };
      reader.readAsDataURL(files);
    }
  }
    

}
