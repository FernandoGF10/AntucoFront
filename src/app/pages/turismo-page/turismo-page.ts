import { Component } from '@angular/core';
import { SiteHeader } from '../../components/site-header/site-header';
import { SiteFooter } from '../../components/site-footer/site-footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-turismo-page',
  imports: [SiteHeader, SiteFooter, CommonModule],
  templateUrl: './turismo-page.html',
  styleUrl: './turismo-page.css'
})
export class TurismoPage {

 atractivos = [
  {
    titulo: 'Cerro Sierra Velluda',
    resumen: 'Un imponente cerro con vistas espectaculares...',
    descripcion: 'El Cerro Sierra Velluda es la segunda montaña más alta de la Región del Biobío, ideal para senderismo y fotografía, rodeado de glaciares y paisajes únicos.',
    imagen: '/img/cerro-sierra-velluda.jpg'
  },
  {
    titulo: 'Laguna del Laja',
    resumen: 'Paisajes montañosos y laguna...',
    descripcion: 'La Laguna del Laja es una reserva natural rodeada de montañas, perfecta para deportes acuáticos, pesca y contemplar la fauna local.',
    imagen: '/img/laguna-laja.jpg'
  },
  {
    titulo: 'Volcán Antuco',
    resumen: 'Un volcán icónico de la zona...',
    descripcion: 'El Volcán Antuco es un estratovolcán ubicado en la cordillera de los Andes, reconocido por su historia y belleza natural. Es un atractivo turístico para quienes aman la aventura y el esquí.',
    imagen: '/img/antuco.jpg'
  },
  {
    titulo: 'Salto las Chilcas',
    resumen: 'Una hermosa cascada rodeada de naturaleza...',
    descripcion: 'El Salto las Chilcas es una cascada imponente rodeada de bosque nativo. Es un lugar ideal para disfrutar del aire libre, el agua fresca y hacer picnic en familia.',
    imagen: '/img/salto-las-chilcas.jpg'
  },
  {
    titulo: 'Velo de la Novia',
    resumen: 'Una impresionante caída de agua...',
    descripcion: 'El Velo de la Novia es una cascada de gran altura que forma un espectáculo natural único. Su nombre se debe a la forma del agua al caer, similar a un velo nupcial.',
    imagen: '/img/velo-de-la-novia.jpg'
  }
];

modalVisible = false;
modalData: any = null;

abrirModal(atractivo: any) {
  this.modalData = atractivo;
  this.modalVisible = true;
}

cerrarModal() {
  this.modalVisible = false;
  this.modalData = null;
} 
}
