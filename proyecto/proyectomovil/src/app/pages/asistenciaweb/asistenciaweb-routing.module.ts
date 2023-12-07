import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciawebPage } from './asistenciaweb.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciawebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciawebPageRoutingModule {}
