import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoProductoComponent } from './components/catalogo-producto/catalogo-producto.component';
import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConversorDivisaComponent } from './components/conversor-divisa/conversor-divisa.component';
import { VerificarMonedaDirective } from './directivas/verificar-moneda.directive';
import { RegistroTransaccionComponent } from './components/registro-transaccion/registro-transaccion.component';
import { FormularioTicketComponent } from './components/formulario-ticket/formulario-ticket.component';
import { ListaEspectadoresComponent } from './components/lista-espectadores/lista-espectadores.component';
import { RegistroTicketComponent } from './components/registro-ticket/registro-ticket.component';
import { TipoEspectadorPipe } from './pipe/tipo-espectador.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CatalogoProductoComponent,
    FormularioProductoComponent,
    ConversorDivisaComponent,
    VerificarMonedaDirective,
    RegistroTransaccionComponent,
    FormularioTicketComponent,
    ListaEspectadoresComponent,
    RegistroTicketComponent,
    TipoEspectadorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
