import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AlcaldiaPage } from './pages/alcaldia-page/alcaldia-page';

export const routes: Routes = [
  { path: 'home.html', component: HomePage },
  { path: 'alcaldia.html', component: AlcaldiaPage },
];

