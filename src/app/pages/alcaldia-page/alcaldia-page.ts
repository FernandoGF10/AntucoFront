import { Component } from '@angular/core';
import { SiteHeader } from '../../components/site-header/site-header';
import { SiteContent } from '../../components/site-content/site-content';
import { SiteFooter } from '../../components/site-footer/site-footer';

@Component({
  selector: 'app-alcaldia-page',
  imports: [SiteHeader, SiteContent, SiteFooter],
  templateUrl: './alcaldia-page.html',
  styleUrl: './alcaldia-page.css'
})
export class AlcaldiaPage {

}
