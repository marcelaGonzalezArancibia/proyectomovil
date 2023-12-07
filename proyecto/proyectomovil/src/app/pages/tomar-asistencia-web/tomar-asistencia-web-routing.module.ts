import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TomarAsistenciaWebPage } from './tomar-asistencia-web.page';

const routes: Routes = [
  {
    path: '',
    component: TomarAsistenciaWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomarAsistenciaWebPageRoutingModule {}
