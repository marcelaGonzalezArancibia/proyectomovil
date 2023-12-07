import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoswebPage } from './cursosweb.page';

const routes: Routes = [
  {
    path: '',
    component: CursoswebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoswebPageRoutingModule {}
