import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NewsItem {
  id: number;
  dateLabel: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
}

@Component({
  selector: 'app-site-content',
  imports: [CommonModule],
  templateUrl: './site-content.html',
  styleUrl: './site-content.css'
})
export class SiteContent {
  private baseItem: NewsItem = {
    id: 1,
    dateLabel: '05 AGO',
    title: 'Coordinarán encuentro entre arrieros de Antuco y San Fabián de Alicó',
    excerpt: 'Se espera que este encuentro sea durante este 2025.',
    imageUrl: '/img/cordillera_antuco.jpg',
    category: 'CULTURA, DIDECO'
  };

  // Mismo contenido repetido para fines de diseño (sin funcionalidad)
  newsItems: NewsItem[] = Array.from({ length: 8 }).map((_, i) => ({
    ...this.baseItem,
    id: i + 1
  }));
}
