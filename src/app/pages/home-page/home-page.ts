import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeader } from '../../components/site-header/site-header';
import { SiteFooter } from '../../components/site-footer/site-footer';

interface NewsItem {
  id: number;
  dateLabel: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
}

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, SiteHeader, SiteFooter],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  newsItems: NewsItem[] = [
    {
      id: 1,
      dateLabel: '22 SEP',
      title: 'Figura del arriero vuelve a lucir imponente con su letrero y riendas en el Centro de Acogida al Visitante',
      excerpt: 'Invitar a los vecinos y vecinas y, turistas, a ayudar en la mantención y conservación del monumento.',
      imageUrl: '/img/noticias/monumento.jpg',
      category: 'CULTURA'
    },
    {
      id: 2,
      dateLabel: '22 SEP',
      title: 'Con éxito de convocatoria y un entretenido espectáculo Antuco destacó en Fiestas Patrias',
      excerpt: 'Durante sus 5 días de desarrolló, entre el 17 al 21 de septiembre, reunió a una gran cantidad de público, entre vecinos y visitantes.',
      imageUrl: '/img/noticias/fiesta.jpg',
      category: 'DIDECO'
    },
    {
      id: 3,
      dateLabel: '05 AGO',
      title: 'Coordinarán encuentro entre arrieros de Antuco y San Fabián de Alico',
      excerpt: 'Se espera que este encuentro sea durante este 2025.',
      imageUrl: '/img/noticias/reunion.jpg',
      category: 'CULTURA, DIDECO'
    },
    {
      id: 4,
      dateLabel: '05 AGO',
      title: 'Alcaldesa participa de importante evento que busca fortalecer los Gobiernos Regionales',
      excerpt: 'El evento contó con el saludo inicial del gobernador regional, don Sergio Giacamán García, y la participación de la Subsecretaria de Desarrollo Regional.',
      imageUrl: '/img/noticias/Alcaldesa.jpg',
      category: 'ALCALDÍA'
    },
    {
      id: 5,
      dateLabel: '05 AGO',
      title: 'Realizan positiva evaluación del proyecto de limpieza preventiva de canales urbanos',
      excerpt: 'Se trata de una iniciativa enmarcada en el Plan de Invierno 2025. ',
      imageUrl: '/img/noticias/urbano.jpg',
      category: 'DIRECCIÓN DE RIESGO Y DESASTRES, OBRAS'
    },
    {
      id: 6,
      dateLabel: '05 AGO',
      title: 'Anuncian futuro edificio para sala de televigilancia y Dirección de Seguridad Pública',
      excerpt: 'Durante esta semana se llevó a cabo la sesión ordinaria número 64 del Consejo de Seguridad Pública de la comuna de Antuco.',
      imageUrl: '/img/noticias/seguridad.jpg',
      category: 'DIRECCIÓN DE SEGURIDAD PÚBLICA'
    },
  ];
}
