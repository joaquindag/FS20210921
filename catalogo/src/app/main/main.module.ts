import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { AjaxWaitComponent } from './ajax-wait';
import { RouterModule } from '@angular/router';
import { SecurityModule } from '../security';



@NgModule({
  declarations: [
    HomeComponent,
    NotificationComponent,
    PageNotFoundComponent,
    HeaderComponent,
    AjaxWaitComponent
  ],
  exports: [
    HomeComponent,
    NotificationComponent,
    HeaderComponent,
    AjaxWaitComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    SecurityModule
  ]
})
export class MainModule {
  constructor( @Optional() @SkipSelf() parentModule: MainModule) {
    if (parentModule) {
      const msg = `MainModule has already been loaded.
        Import MainModule once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
 }
