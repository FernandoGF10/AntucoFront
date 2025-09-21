import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-formulario-contacto',
  imports: [FormsModule],
  templateUrl: './formulario-contacto.html',
  styleUrl: './formulario-contacto.css'
})
export class FormularioContacto {

  requerimiento = 'Información';  // valor por defecto

  tipoResidencia = 'Casa' // valor por defecto

  mostrarDatos(form: NgForm) {
    console.log('Datos del formulario:', form.value);
  }
}
