import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomarAsistenciaWebPageRoutingModule } from './tomar-asistencia-web-routing.module';

import { TomarAsistenciaWebPage } from './tomar-asistencia-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomarAsistenciaWebPageRoutingModule
  ],
  declarations: [TomarAsistenciaWebPage]
})
export class TomarAsistenciaWebPageModule {}
