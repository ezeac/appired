import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { RecaptchaModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienesSomos/quienesSomos.component';
import { ConsultasYServiciosComponent } from './consultasYServicios/consultasYServicios.component';
  import { OspacadescargarCartillaPrestadoresComponent } from './consultasYServicios/obrasSociales/ospaca/descargarCartillaPrestadores/ospacadescargarCartillaPrestadores.component';
  import { OspacacredencialProvisoriaComponent } from './consultasYServicios/obrasSociales/ospaca/credencialProvisoria/ospacacredencialProvisoria.component';
  import { OspacaencontrarPrestadoresComponent } from './consultasYServicios/obrasSociales/ospaca/encontrarPrestadores/ospacaencontrarPrestadores.component';
import { PrestadoresAutogestionComponent } from './prestadoresAutogestion/prestadoresAutogestion.component';
  import { LoginPrestadoresComponent } from './prestadoresAutogestion/loginPrestadores/loginPrestadores.component';
import { PrestadoresConsultasYServiciosComponent } from './prestadoresConsultasYServicios/prestadoresConsultasYServicios.component';
  import { NormasOperativasComponent } from './prestadoresConsultasYServicios/normasOperativas/normasOperativas.component';
  import { CosegurosComponent } from './prestadoresConsultasYServicios/coseguros/coseguros.component';
import { ContactoComponent } from './contacto/contacto.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienesSomosComponent,
    PrestadoresAutogestionComponent,
      LoginPrestadoresComponent,
    PrestadoresConsultasYServiciosComponent,
      NormasOperativasComponent,
      CosegurosComponent,
    ContactoComponent,
    ConsultasYServiciosComponent,
      OspacadescargarCartillaPrestadoresComponent,
      OspacacredencialProvisoriaComponent,
      OspacaencontrarPrestadoresComponent
  ],
  imports: [
    BrowserModule,
    RecaptchaModule.forRoot(),
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbIcREm95TQ_rlWyj9JbRjK5pB6vp1a04'
    })
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
