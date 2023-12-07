import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciawebPageRoutingModule } from './asistenciaweb-routing.module';

import { AsistenciawebPage } from './asistenciaweb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciawebPageRoutingModule
  ],
  declarations: [AsistenciawebPage]
})
export class AsistenciawebPageModule {}
