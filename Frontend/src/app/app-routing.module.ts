import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoProductoComponent } from './components/catalogo-producto/catalogo-producto.component';
import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';
import { ConversorDivisaComponent } from './components/conversor-divisa/conversor-divisa.component';
import { RegistroTransaccionComponent } from './components/registro-transaccion/registro-transaccion.component';
import { FormularioTicketComponent } from './components/formulario-ticket/formulario-ticket.component';
import { ListaEspectadoresComponent } from './components/lista-espectadores/lista-espectadores.component';
import { RegistroTicketComponent } from './components/registro-ticket/registro-ticket.component';

const routes: Routes = [
  {path:"catalogoDeProductos", component:CatalogoProductoComponent},
  {path:"altaProducto/:id", component:FormularioProductoComponent},
  {path:"conversorDeMonedas", component: ConversorDivisaComponent},
  {path:"registroDeTransacciones", component:RegistroTransaccionComponent},
  {path:"formularioTicket/:dni/:id",component:FormularioTicketComponent},
  {path:"listaEspectadores", component:ListaEspectadoresComponent},
  {path:"listaTickes", component:RegistroTicketComponent},
  {path:"", redirectTo:"catalogoDeProductos",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
