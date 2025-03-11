import { Routes } from '@angular/router';



export const routes: Routes = [
  { path: 'users',
    loadComponent : () => import ('./components/users/user.component').then(c=>c.UserComponent)
  },
  { path: 'create',
    loadComponent : () => import ('./components/form-user/form-user.component').then(c=>c.FormUserComponent)
  },
  { path: 'edit/:id',
    loadComponent : () => import ('./components/form-user/form-user.component').then(c=>c.FormUserComponent)
  }
];
