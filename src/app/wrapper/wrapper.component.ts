import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from '../components/table/table.component';


@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, TableComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent {
  
}
