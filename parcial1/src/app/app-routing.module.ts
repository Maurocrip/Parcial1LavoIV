import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AltasProductoComponent } from './components/altas-producto/altas-producto.component';
import { validacionesGuard } from './guards/validaciones.guard';
import { LogeadosComponent } from './components/listado-productos/logeados/logeados.component';
import { TodosComponent } from './components/listado-productos/todos/todos.component';
import { rolAdminGuard, salirTerminosGuard } from './guards/rol-admin.guard';
import { ContainerComponent } from './components/container/container.component';
import { CargaContainerComponent } from './components/container/carga-container/carga-container.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TerminosCondicionesComponent } from './components/registro/terminos-condiciones/terminos-condiciones.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "TerminoCondiciones", component: TerminosCondicionesComponent, canDeactivate:[salirTerminosGuard]},
  {path: "detalle", component: LogeadosComponent, canActivate :[validacionesGuard]},
  {path: "producto", component: AltasProductoComponent, canActivate :[validacionesGuard]},
  {path: "container", component: ContainerComponent, canActivate :[rolAdminGuard]},
  {path: "listaProductos", component: TodosComponent},
  {path: "CargaContainer", component: CargaContainerComponent, canActivate :[validacionesGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
