import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoswebPageRoutingModule } from './cursosweb-routing.module';

import { CursoswebPage } from './cursosweb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoswebPageRoutingModule
  ],
  declarations: [CursoswebPage]
})
export class CursoswebPageModule {}
