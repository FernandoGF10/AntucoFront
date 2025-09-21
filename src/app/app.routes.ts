import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AlcaldiaPage } from './pages/alcaldia-page/alcaldia-page';
import {TurismoPage} from './pages/turismo-page/turismo-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'alcaldia.html', component: AlcaldiaPage },
  { path: 'turismo.html', component: TurismoPage },
];

