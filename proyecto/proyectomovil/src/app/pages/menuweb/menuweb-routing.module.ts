import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuwebPage } from './menuweb.page';

const routes: Routes = [
  {
    path: '',
    component: MenuwebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuwebPageRoutingModule {}
