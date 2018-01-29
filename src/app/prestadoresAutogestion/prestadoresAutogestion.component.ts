import { Component, Input } from "@angular/core";
import { PeticionesService } from '../services/peticiones.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var jquery:any;
declare var $:any;
declare var ScrollMagic:any;
declare var TweenMax:any;

@Component({
	selector: "prestadoresAutogestion",
	templateUrl: "./prestadoresAutogestion.component.html",
	styleUrls: ['./prestadoresAutogestion.component.css'],
	providers: [PeticionesService]
})

//PASOS PARA AGREGAR UN NUEVO SERVICIO O CONSULTA:
/*
Crear carpeta y componente donde corresponda con el formato de nombre: obrasocialnombreDelTramite
Agregar componente a module.ts
Agregar la obraSocial al Array "obraSocial" (en el caso de que no exista ya) con el formato ["obrasocial", "Obra Social"]
Agregar condicional en cargarTramite, o agregar item al array si ya existe la obra social, con el formato ["obrasocialnombreDelTramite", "Nombre a mostrar"]
En caso de que necesite campos adicionales, agregar condicional en cargarDetalle (como "encontrar prestadoresAutogestion") y sus variables necesarias de forma ordenada
Agregar en el div ".contenedorResultadoTramite" el selector del componente creado con el *ngIf="vistaResultado == 'obrasocialnombreDelTramite'"
*/
// quedaría para agregar normas operativas, coseguro y login

export class PrestadoresAutogestionComponent{
	public titulo = "Autogestión Prestadores";
	//VARIABLES GENERALES
	public datos:any = [];
	public usuario; public password; public login = false;

	constructor(
		private peticionesService:PeticionesService,
		private _route: ActivatedRoute,
		private _router: Router
	){}

	
	//FUNCIONES GENERALES
	ngOnInit(){

		//INICIALIZAR CONTROLLER
		var scrollMagicController = new ScrollMagic.Controller();

		var i = 0;
		var offsetAnterior = 0;
		$(".fadeInAnimation").each(function(index,element){
		    var offset = $(element).offset().top;
		    if (offsetAnterior == offset) {
		        i += 0.2;
		    } else {
		        i = 0;
		    }
		    offsetAnterior = $(element).offset().top;
		    // CREANDO ANIMACIÓN
		    var fadeInGeneral = new TweenMax.fromTo(element, 0.5, {opacity:0, y:50},{y: 0, opacity: 1, delay: i});
		    //ASIGNANDO TRIGGERS
		    var scenefadeInGeneral = new ScrollMagic.Scene({triggerElement: element, offset: -250}).setTween(fadeInGeneral).addTo(scrollMagicController);
		})

		// CREANDO ANIMACIÓN
	    var staggerAnimation = new TweenMax.staggerFromTo($(".staggerAnimation"), 0.5, {opacity:0, y:50},{y: 0, opacity: 1}, 0.15);
	    //ASIGNANDO TRIGGERS
	    var scenestaggerAnimation = new ScrollMagic.Scene({triggerElement: $(".staggerAnimation"), offset: -550}).setTween(staggerAnimation).addTo(scrollMagicController);

	    // CREANDO ANIMACIÓN
	    var staggerAnimation2 = new TweenMax.staggerFromTo($(".staggerAnimation2"), 0.5, {opacity:0, y:50},{y: 0, opacity: 1}, 0.15);
	    //ASIGNANDO TRIGGERS
	    var scenestaggerAnimation2 = new ScrollMagic.Scene({triggerElement: $(".staggerAnimation2"), offset: 150}).setTween(staggerAnimation2).addTo(scrollMagicController);
	}
	

	onSubmitLogin(form){
		if (form.valid) {
			var respuesta = this.peticionesService.getLoginPrestadores(this.usuario, this.password);
			var x = respuesta.childNodes[0].childNodes[0].childNodes;
			for (var i = 0; i < x.length; i++) {
				//if (x[i].nodeName != "#text") {
					this.datos.push(x[i]);
					if (x[i].nodeValue == "ok") {
						this.login = true;
						this._router.navigate(["loginPrestadores"], {relativeTo: this._route, skipLocationChange: true});
					}
				//}
			}
		}
	}

}