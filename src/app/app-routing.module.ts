import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdataGuard } from './core/guards/userdata.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    canActivate: [
      UserdataGuard
    ],
    loadChildren:
      () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: 'auth',
    loadChildren:
      () => import('./auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
