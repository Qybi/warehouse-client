import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '/home', pathMatch: 'full', component: HomeComponent },
    { path: '*', pathMatch: 'full', component: HomeComponent }
];
