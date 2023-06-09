import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-catalogo-producto',
  templateUrl: './catalogo-producto.component.html',
  styleUrls: ['./catalogo-producto.component.css']
})
export class CatalogoProductoComponent implements OnInit {

  productos!: Array<Producto>;
  
  constructor(private productoService: ProductoService, private router: Router) {
    this.productos=new Array<Producto>();
  }

  ngOnInit(): void {
    this.obtenerProductosDestacados();
  }

  obtenerProductosDestacados(){
    console.log("Entre");
    this.productoService.getProductos().subscribe(
      (result) =>{
        result.forEach( (element:any) => {
          let unProducto:Producto = new Producto();
          Object.assign(unProducto, element);
          this.productos.push(unProducto);
        });
      },
      error => {alert("Error al cargar los productos");}
    )
    console.log(this.productos);
  }

  public registrarProducto(){
    this.router.navigate(["altaProducto", 0]);
  }
  
}
