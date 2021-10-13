import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MyCoreModule } from 'src/lib/my-core/my-core.module';
import { MainModule } from './main';
import { SecurityModule } from './security';
import { CommonModule } from '@angular/common';
import { LoggerService } from 'src/lib/my-core';
import { CommonServicesModule } from './common-services';
import { FormularioComponent } from './formulario/formulario.component';
import { ClientesFormularioComponent } from './clientes-formulario/clientes-formulario.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactosModule } from './contactos';
import { CommonComponentModule } from './common-component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DinamicoComponent,
    CalculadoraComponent,
    FormularioComponent,
    ClientesFormularioComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MyCoreModule,
    MainModule,
    SecurityModule,
    CommonModule,
    CommonServicesModule,
    HttpClientModule,
    ContactosModule,
    CommonComponentModule,
    NgxPaginationModule
  ],
  providers: [
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
