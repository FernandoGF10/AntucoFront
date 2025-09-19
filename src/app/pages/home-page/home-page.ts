import { Component } from '@angular/core';
import {SiteHeader} from '../../components/site-header/site-header';
import {SiteContent} from '../../components/site-content/site-content';
import {SiteFooter} from '../../components/site-footer/site-footer';

@Component({
  selector: 'app-home-page',
  imports: [SiteHeader, SiteContent, SiteFooter],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
