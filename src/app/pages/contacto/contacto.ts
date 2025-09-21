import { Component } from '@angular/core';
import {SiteHeader} from '../../components/site-header/site-header';
import {SiteFooter} from '../../components/site-footer/site-footer';
import {FormularioContacto} from '../../components/formulario-contacto/formulario-contacto';


@Component({
  selector: 'app-contacto',
  imports: [SiteHeader, SiteFooter, FormularioContacto],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

}
