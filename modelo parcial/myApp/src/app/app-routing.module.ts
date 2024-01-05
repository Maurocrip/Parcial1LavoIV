import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { AltaActorComponent } from './components/Actor/alta/alta.component';
import { AltaComponent } from './components/Pelicula/alta/alta.component';
import { ActorPeliculaComponent } from './components/actor-pelicula/actor-pelicula.component';

const routes: Routes = [
  {path: "busqueda", component: BusquedaComponent},
  {path: "actor", component: AltaActorComponent},
  {path: "pelicula", component: AltaComponent},
  {path: "actorPelicula", component: ActorPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
