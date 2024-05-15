import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StudentManagerComponent } from './components/student-manager/student-manager.component';
import { StudentComponent } from './components/student/student.component';
import { PcManagerComponent } from './components/pc-manager/pc-manager.component';
import { AccessoriesManagerComponent } from './components/accessories-manager/accessories-manager.component';
import { TicketManagerComponent } from './components/ticket-manager/ticket-manager.component';
import { TicketComponent } from './components/ticket/ticket.component';

export const routes: Routes = [
    { path: 'home', pathMatch: 'full', component: HomeComponent },
    { path: 'students', pathMatch: 'full', component: StudentManagerComponent },
    { path: 'students/:id', pathMatch: 'full', component: StudentComponent },
    { path: 'pcs', pathMatch: 'full', component: PcManagerComponent },
    { path: 'accessories', pathMatch: 'full', component: AccessoriesManagerComponent },
    { path: 'tickets', pathMatch: 'full', component: TicketManagerComponent },
    { path: 'tickets/:id', pathMatch: 'full', component: TicketComponent },
    { path: '*', pathMatch: 'full', component: HomeComponent }
];
