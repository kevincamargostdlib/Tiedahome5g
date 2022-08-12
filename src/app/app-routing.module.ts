import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
      },
    ]
  },
  {
    path: 'main',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
