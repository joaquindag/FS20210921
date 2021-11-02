import {PaginatorModule} from 'primeng/paginator';

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MyCoreModule } from "src/lib/my-core";
import { PELICULAS_COMPONENTES } from ".";
import { CommonComponentModule } from "../common-component";
import { CommonServicesModule } from "../common-services";

@NgModule({
  declarations: [
    PELICULAS_COMPONENTES,
  ],
  exports: [
    PELICULAS_COMPONENTES,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule,

    PaginatorModule,
     CommonComponentModule, MyCoreModule,

  ]
})
export class PeliculasModule { }
