import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main';
import { NewsComponent } from './news/news.component';
import { CommonComponentModule } from './common-component';
import { CategoriasModule } from './category';
import { ActoresModule } from './actor';
import { IdiomasModule } from './language';
import { PeliculasModule } from './film';
import { NotificationModalComponent } from './main/notification-modal/notification-modal.component';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from 'src/lib/my-core';
import { AuthInterceptor, SecurityModule } from './security';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AjaxWaitInterceptor } from './main/ajax-wait';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NotificationModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    CommonComponentModule,
    CategoriasModule,
    ActoresModule,
    IdiomasModule,
    PeliculasModule,
    MyCoreModule,
    SecurityModule,
    HttpClientModule,
    FormsModule,

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
