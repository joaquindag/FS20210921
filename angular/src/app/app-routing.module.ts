import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContactosAddComponent, ContactosEditComponent, ContactosListComponent, ContactosViewComponent } from './contactos';
import { DemosComponent } from './demos/demos.component';
import { HomeComponent } from './main';
import { AuthGuard } from './security';

const routes: Routes = [

  {path:'contactos',component:ContactosListComponent},
  {path:'contactos/add',component:ContactosAddComponent,canActivate:[AuthGuard]},
  {path:'contactos/:id/edit',component:ContactosEditComponent,canActivate:[AuthGuard]},
  {path:'contactos/:id',component:ContactosViewComponent},
  {path:'contactos/:id/:kk',component:ContactosViewComponent},

  {path:'demos',component:DemosComponent},
  {path:'inicio',component:HomeComponent},
  {path:'calculadora',component:CalculadoraComponent},
  // {path:'libros',component:LibrosComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
