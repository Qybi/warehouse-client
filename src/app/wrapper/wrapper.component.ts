import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from '../components/table/table.component';


@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, RouterOutlet, TableComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent {
  
}
