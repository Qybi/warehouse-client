import { Route, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StudentManagerComponent } from './components/student-manager/student-manager.component';
import { StudentComponent } from './components/student/student.component';
import { createWrapperChildren } from './wrapper/wrapper.component';

export const AuthenticatedRoutes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: '*', pathMatch: 'full', component: HomeComponent },
  createWrapperChildren([
    { path: 'home', pathMatch: 'full', component: HomeComponent },
    { path: 'students', pathMatch: 'full', component: StudentManagerComponent },
    { path: 'students/:id', pathMatch: 'full', component: StudentComponent }
  ])
];
