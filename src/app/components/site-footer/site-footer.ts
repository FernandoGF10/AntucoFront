import { Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  imports: [],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css'
})
export class SiteFooter {
  readonly currentYear:number = new Date().getFullYear();
}
