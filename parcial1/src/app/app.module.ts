import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltasProductoComponent } from './components/altas-producto/altas-producto.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { DetalleProductosComponent } from './components/detalle-productos/detalle-productos.component';
import { LogeadosComponent } from './components/listado-productos/logeados/logeados.component';
import { TodosComponent } from './components/listado-productos/todos/todos.component';
import { ListadoPaisComponent } from './components/listado-pais/listado-pais.component';
import { ModificarComponent } from './components/container/modificar/modificar.component';
import { CrearComponent } from './components/container/crear/crear.component';
import { EliminarComponent } from './components/container/eliminar/eliminar.component';
import { ContainerComponent } from './components/container/container.component';
import { CargaContainerComponent } from './components/container/carga-container/carga-container.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TerminosCondicionesComponent } from './components/registro/terminos-condiciones/terminos-condiciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AltasProductoComponent,
    TablaPaisesComponent,
    DetalleProductosComponent,
    LogeadosComponent,
    TodosComponent,
    ListadoPaisComponent,
    ModificarComponent,
    CrearComponent,
    EliminarComponent,
    ContainerComponent,
    CargaContainerComponent,
    RegistroComponent,
    TerminosCondicionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"parcial1labo4","appId":"1:683524045197:web:1ad129244387c1287765c4","storageBucket":"parcial1labo4.appspot.com","apiKey":"AIzaSyBoyw3DCzkfaBbcpMirH9_r2Ge76NMqrO8","authDomain":"parcial1labo4.firebaseapp.com","messagingSenderId":"683524045197"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
