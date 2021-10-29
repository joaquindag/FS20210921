// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// import { MyCoreModule } from 'src/lib/my-core';
// import { CommonServicesModule } from '../common-services';
// import { ContactosComponent, CONTACTOS_COMPONENTES } from './componente.component';
import {PaginatorModule} from 'primeng/paginator';
// import { CommonComponentModule } from '../common-component';

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MyCoreModule } from "src/lib/my-core";
import { ContactosComponent, CONTACTOS_COMPONENTES } from ".";
import { CommonComponentModule } from "../common-component";
import { CommonServicesModule } from "../common-services";

@NgModule({
  declarations: [
    CONTACTOS_COMPONENTES,
  ],
  exports: [
    CONTACTOS_COMPONENTES,
    // ContactosComponent,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule,

    PaginatorModule,
     CommonComponentModule, MyCoreModule,

  ]
})
export class ContactosModule { }
