import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
  path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
{
  path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
},
  {
    path: 'registro',
    loadChildren: () => import('./auth/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'restore',
    loadChildren: () => import('./auth/restore/restore.module').then( m => m.RestorePageModule)
  },
  {
    path: 'login-chofer',
    loadChildren: () => import('./auth/login-chofer/login-chofer.module').then( m => m.LoginChoferPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./homes/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'admincrud',
    loadChildren: () => import('./crud/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'client/:id',
    loadChildren: () => import('./crud/client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'get-client',
    loadChildren: () => import('./crud/get-client/get-client.module').then( m => m.GetClientPageModule)
  },
  {
    path: 'client-home',
    loadChildren: () => import('./homes/client-home/client-home.module').then( m => m.ClientHomePageModule)
  },
  {
    path: 'admin-driver',
    loadChildren: () => import('./crud/admin-driver/admin-driver.module').then( m => m.AdminDriverPageModule)
  },
  {
    path: 'get-driver/:id',
    loadChildren: () => import('./crud/get-driver/get-driver.module').then( m => m.GetDriverPageModule)
  },
  {
    path: 'get-drivers',
    loadChildren: () => import('./crud/get-drivers/get-drivers.module').then( m => m.GetDriversPageModule)
  },
  {
    path: 'solicitudes',
    loadChildren: () => import('./crud/solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
