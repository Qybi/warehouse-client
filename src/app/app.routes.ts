import { Route, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/administration/admin/admin.component';

import { StudentManagerComponent } from './components/student-manager/student-manager.component';
import { StudentComponent } from './components/student/student.component';
import { createWrapperChildren } from './wrapper/wrapper.component';
import { PcManagerComponent } from './components/pc-manager/pc-manager.component';
import { AccessoriesManagerComponent } from './components/accessories-manager/accessories-manager.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  createWrapperChildren([
    { path: 'home', pathMatch: 'full', component: HomeComponent },
    { path: 'students', pathMatch: 'full', component: StudentManagerComponent },
    { path: 'students/:id', pathMatch: 'full', component: StudentComponent },
    { path: 'pcs', pathMatch: 'full', component: PcManagerComponent },
    {
      path: 'accessories',
      pathMatch: 'full',
      component: AccessoriesManagerComponent,
    },
    { path: 'archives', pathMatch: 'full', component: ArchivesComponent },
  ]),
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: '**', redirectTo: 'students'},
];
