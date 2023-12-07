import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRwebPage } from './qrweb.page';

const routes: Routes = [
  {
    path: '',
    component: QRwebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRwebPageRoutingModule {}
