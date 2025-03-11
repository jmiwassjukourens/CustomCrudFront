import { Routes } from '@angular/router';



export const routes: Routes = [
  { path: 'users',
    loadComponent : () => import ('./components/users/user.component').then(c=>c.UserComponent)

  }
];
