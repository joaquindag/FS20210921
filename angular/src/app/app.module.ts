import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MyCoreModule } from 'src/lib/my-core/my-core.module';
import { MainModule } from './main';
import { AuthInterceptor, SecurityModule } from './security';
import { CommonModule } from '@angular/common';
import { ERROR_LEVEL, LoggerService } from 'src/lib/my-core';
import { CommonServicesModule } from './common-services';
import { FormularioComponent } from './formulario/formulario.component';
import { ClientesFormularioComponent } from './clientes-formulario/clientes-formulario.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonComponentModule } from './common-component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotificationModalComponent } from './main/notification-modal/notification-modal.component';
import { ContactosModule } from './contactos';
import { environment } from 'src/environments/environment';
import { AjaxWaitInterceptor } from './main/ajax-wait';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    DinamicoComponent,
    CalculadoraComponent,
    FormularioComponent,
    ClientesFormularioComponent,
    NotificationModalComponent,

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
    NgxPaginationModule,
    MainModule,
  ],
  providers: [
    LoggerService,
    {provide:ERROR_LEVEL,useValue:environment.ERROR_LEVEL},
    {provide:LOCALE_ID,useValue:'es-ES'},
    {provide:HTTP_INTERCEPTORS,useClass:AjaxWaitInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
