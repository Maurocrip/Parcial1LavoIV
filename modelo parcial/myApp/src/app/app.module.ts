import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienbenidoComponent } from './components/bienbenido/bienbenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { AltaComponent } from './components/Pelicula/alta/alta.component';
import { ListadoComponent } from './components/Pelicula/listado/listado.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicioPaisService } from './servicios/servicio-pais.service';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { AltaActorComponent } from './components/Actor/alta/alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ListadoActorComponent } from './components/Actor/listado/listado.component';
import { ActorPeliculaComponent } from './components/actor-pelicula/actor-pelicula.component';
import { TablaActoresComponent } from './components/tabla-actores/tabla-actores.component';
import { DetalleActorComponent } from './components/detalle-actor/detalle-actor.component';
import { PeliculasActuadasComponent } from './components/peliculas-actuadas/peliculas-actuadas.component';
import { DetallePaisComponent } from './components/detalle-pais/detalle-pais.component';

@NgModule({
  declarations: [
    AppComponent,
    BienbenidoComponent,
    BusquedaComponent,
    AltaComponent,
    AltaActorComponent,
    ListadoComponent,
    ListadoActorComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent,
    ActorPeliculaComponent,
    TablaActoresComponent,
    DetalleActorComponent,
    PeliculasActuadasComponent,
    DetallePaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [ServicioPaisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
