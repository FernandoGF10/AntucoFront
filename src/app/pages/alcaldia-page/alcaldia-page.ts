import { Component } from '@angular/core';
import { SiteHeader } from '../../components/site-header/site-header';
import { SiteFooter } from '../../components/site-footer/site-footer';

@Component({
  selector: 'app-alcaldia-page',
  imports: [SiteHeader, SiteFooter],
  templateUrl: './alcaldia-page.html',
  styleUrl: './alcaldia-page.css'
})
export class AlcaldiaPage {

}
