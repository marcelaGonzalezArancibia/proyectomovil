import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Cursos } from './interface/cursos';
import { detalle_Cursos } from './interface/detalle_cursos';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./pages/cursos/cursos.module').then( m => m.CursosPageModule)
  },
 
  {
    path: 'asistencia/:idcurso',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then(m => m.AsistenciaPageModule)
  },
 
  {
    path: 'escaner',
    loadChildren: () => import('./pages/escaner/escaner.module').then( m => m.EscanerPageModule)
  },
 
  {
    path: 'credencial',
    loadChildren: () => import('./pages/credencial/credencial.module').then( m => m.CredencialPageModule)
  },
  {
    path: 'qrweb',
    loadChildren: () => import('./pages/qrweb/qrweb.module').then( m => m.QRwebPageModule)
  },
  {
    path: 'tomar-asistencia-web/:datos',
    loadChildren: () => import('./pages/tomar-asistencia-web/tomar-asistencia-web.module').then( m => m.TomarAsistenciaWebPageModule)
  },
 
  {
    path: 'recuperarcontrasena',
    loadChildren: () => import('./pages/recuperarcontrasena/recuperarcontrasena.module').then( m => m.RecuperarcontrasenaPageModule)
  },
  {
    path: 'menuweb',
    loadChildren: () => import('./pages/menuweb/menuweb.module').then( m => m.MenuwebPageModule)
  },
  {
    path: 'cursosweb',
    loadChildren: () => import('./pages/cursosweb/cursosweb.module').then( m => m.CursoswebPageModule)
  },
  {
    path: 'credencialweb',
    loadChildren: () => import('./pages/credencialweb/credencialweb.module').then( m => m.CredencialwebPageModule)
  },
  {
    path: 'asistenciaweb',
    loadChildren: () => import('./pages/asistenciaweb/asistenciaweb.module').then( m => m.AsistenciawebPageModule)
  },
  {
    path: 'menu-cursosweb',
    loadChildren: () => import('./pages/menu-cursosweb/menu-cursosweb.module').then( m => m.MenuCursoswebPageModule)
  },
  {
    path: 'registrate',
    loadChildren: () => import('./pages/registrate/registrate.module').then( m => m.RegistratePageModule)
  },
  {
    path: 'recuperarcontrasena2',
    loadChildren: () => import('./pages/recuperarcontrasena2/recuperarcontrasena2.module').then( m => m.Recuperarcontrasena2PageModule)
  }
 
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
