import {PaginatorModule} from 'primeng/paginator';

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonComponentModule } from "../common-component";
import { CommonServicesModule } from "../common-services";
import { MyCoreModule } from 'src/lib/my-core';
import { CATEGORIAS_COMPONENTES } from '.';

@NgModule({
  declarations: [
    CATEGORIAS_COMPONENTES
  ],
  exports: [
    CATEGORIAS_COMPONENTES
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule,

    PaginatorModule,
     CommonComponentModule, MyCoreModule,

  ]
})
export class CategoriasModule { }
