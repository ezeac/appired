import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienesSomos/quienesSomos.component';
import { ConsultasYServiciosComponent } from './consultasYServicios/consultasYServicios.component';
import { PrestadoresAutogestionComponent } from './prestadoresAutogestion/prestadoresAutogestion.component';
	import { LoginPrestadoresComponent } from './prestadoresAutogestion/loginPrestadores/loginPrestadores.component';
import { PrestadoresConsultasYServiciosComponent } from './prestadoresConsultasYServicios/prestadoresConsultasYServicios.component';
	import { NormasOperativasComponent } from './prestadoresConsultasYServicios/normasOperativas/normasOperativas.component';
	import { CosegurosComponent } from './prestadoresConsultasYServicios/coseguros/coseguros.component';
import { ContactoComponent } from './contacto/contacto.component';

//Crear rutas
const appRoutes: Routes = [
	// {path: '', component:HomeComponent},
	{path: 'home', component:HomeComponent},
	{path: 'index', component:HomeComponent},
	{path: 'quienesSomos', component:QuienesSomosComponent},
	{path: 'consultasYServicios', component:ConsultasYServiciosComponent},
	{path: 'prestadoresAutogestion', component:PrestadoresAutogestionComponent,
		children: [
			{ path: 'loginPrestadores', component: LoginPrestadoresComponent },
			{ path: '', component: LoginPrestadoresComponent },
		]
	},
	{path: 'prestadoresConsultas', component:PrestadoresConsultasYServiciosComponent,
		children: [
			{ path: 'normasOperativas', component: NormasOperativasComponent },
			{ path: 'coseguros', component: CosegurosComponent }
		]
	},
	{path: 'contacto', component:ContactoComponent},
	{path: '', component:HomeComponent},
];

//Se crea el nav html de esta forma: <a [routerLink]="['quienesSomos']" [routerLinkActive]="['claseLinkActivo']"></a>
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
