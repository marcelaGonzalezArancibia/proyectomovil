import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CredencialwebPage } from './credencialweb.page';

const routes: Routes = [
  {
    path: '',
    component: CredencialwebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredencialwebPageRoutingModule {}
