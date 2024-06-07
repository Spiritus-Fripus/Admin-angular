import { Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageDelayComponent } from './manage-delay/manage-delay.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { adminGuard } from './admin.guard';
import { teacherGuard } from './teacher.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-user', component: EditUserComponent, canActivate: [adminGuard] },
  {
    path: 'edit-user/:id',
    component: EditUserComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'manage-user',
    component: ManageUserComponent,
    canActivate: [teacherGuard],
  },
  {
    path: 'manage-delay',
    component: ManageDelayComponent,
    canActivate: [adminGuard, teacherGuard],
  },
  { path: 'connexion', component: ConnexionComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
