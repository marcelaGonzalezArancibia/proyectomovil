import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recuperarcontrasena2PageRoutingModule } from './recuperarcontrasena2-routing.module';

import { Recuperarcontrasena2Page } from './recuperarcontrasena2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recuperarcontrasena2PageRoutingModule
  ],
  declarations: [Recuperarcontrasena2Page]
})
export class Recuperarcontrasena2PageModule {}
