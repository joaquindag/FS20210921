import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresAddComponent, ActoresEditComponent, ActoresListComponent, ActoresViewComponent } from './actor';
import { CategoriasAddComponent, CategoriasEditComponent, CategoriasListComponent, CategoriasViewComponent } from './category';
import { PeliculasAddComponent, PeliculasEditComponent, PeliculasListComponent, PeliculasViewComponent } from './film';
import { IdiomasAddComponent, IdiomasEditComponent, IdiomasListComponent, IdiomasViewComponent } from './language';
import { AuthGuard } from './security';

const routes: Routes = [
  {path:'categorias',component:CategoriasListComponent},
  {path:'categorias/add',component:CategoriasAddComponent,canActivate:[AuthGuard]},
  {path:'categorias/:id/edit',component:CategoriasEditComponent,canActivate:[AuthGuard]},
  {path:'categorias/:id',component:CategoriasViewComponent},

  {path:'actores',component:ActoresListComponent},
  {path:'actores/add',component:ActoresAddComponent,canActivate:[AuthGuard]},
  {path:'actores/:id/edit',component:ActoresEditComponent,canActivate:[AuthGuard]},
  {path:'actores/:id',component:ActoresViewComponent},

  {path:'idiomas',component:IdiomasListComponent},
  {path:'idiomas/add',component:IdiomasAddComponent,canActivate:[AuthGuard]},
  {path:'idiomas/:id/edit',component:IdiomasEditComponent,canActivate:[AuthGuard]},
  {path:'idiomas/:id',component:IdiomasViewComponent},

  {path:'peliculas',component:PeliculasListComponent},
  {path:'peliculas/add',component:PeliculasAddComponent,canActivate:[AuthGuard]},
  {path:'peliculas/:id/edit',component:PeliculasEditComponent,canActivate:[AuthGuard]},
  {path:'peliculas/:id',component:PeliculasViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
