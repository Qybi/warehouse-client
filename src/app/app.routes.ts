import { Route, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/administration/admin/admin.component';
import { ArchiviPCComponent } from './components/administration/archivi-pc/archivi-pc.component';
import { ArchiviAccessoriComponent } from './components/administration/archivi-accessori/archivi-accessori.component';
import { ArchiviStudentiComponent } from './components/administration/archivi-studenti/archivi-studenti.component';

import { StudentManagerComponent } from './components/student-manager/student-manager.component';
import { StudentComponent } from './components/student/student.component';
import { createWrapperChildren } from './wrapper/wrapper.component';
import { PcManagerComponent } from './components/pc-manager/pc-manager.component';
import { AccessoriesManagerComponent } from './components/accessories-manager/accessories-manager.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { LoginComponent } from './components/login/login.component';

export const AuthenticatedRoutes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: '*', pathMatch: 'full', component: HomeComponent },
  { path: 'pcs', pathMatch: 'full', component: PcManagerComponent },
  {
    path: 'accessories',
    pathMatch: 'full',
    component: AccessoriesManagerComponent,
  },
  createWrapperChildren([
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'students', pathMatch: 'full', component: StudentManagerComponent },
    { path: 'students/:id', pathMatch: 'full', component: StudentComponent },
  ]),
  // { path: 'administration', pathMatch: 'full', component: AdminComponent },
  // { path: 'administration/archivi-pc', pathMatch: 'full', component: ArchiviPCComponent },
  // { path: 'administration/archivi-accessori', pathMatch: 'full', component: ArchiviAccessoriComponent },
  // { path: 'administration/archivi-studenti', pathMatch: 'full', component: ArchiviStudentiComponent },
  // {
  //     path: 'administration',
  //     component: AdminComponent,
  //     children: [
  //         { path: 'archivi-pc', pathMatch: 'full', component: ArchiviPCComponent },
  //         { path: 'archivi-accessori', pathMatch: 'full', component: ArchiviAccessoriComponent },
  //         { path: 'archivi-studenti', pathMatch: 'full', component: ArchiviStudentiComponent }
  //     ]
  // },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'archives', pathMatch: 'full', component: ArchivesComponent },
  { path: '*', pathMatch: 'full', component: HomeComponent },
];
