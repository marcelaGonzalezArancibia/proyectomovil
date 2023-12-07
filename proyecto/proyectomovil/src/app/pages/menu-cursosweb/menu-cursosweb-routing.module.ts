import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCursoswebPage } from './menu-cursosweb.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCursoswebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCursoswebPageRoutingModule {}
