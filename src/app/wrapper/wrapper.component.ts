import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { Route, RouterOutlet, Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';


@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent {
  
}

export function createWrapperChildren(route: Routes): Route {
  return {
    path: '',
    children: route,
    component: WrapperComponent,
    canActivate: [authGuard]
  }
}