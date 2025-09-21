import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AlcaldiaPage } from './pages/alcaldia-page/alcaldia-page';
import {TurismoPage} from './pages/turismo-page/turismo-page';
import {Contacto} from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'alcaldia.html', component: AlcaldiaPage },
  { path: 'turismo.html', component: TurismoPage },
  { path: 'contacto.html', component: Contacto },
];

