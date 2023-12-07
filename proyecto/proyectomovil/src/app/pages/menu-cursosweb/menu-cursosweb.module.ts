import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCursoswebPageRoutingModule } from './menu-cursosweb-routing.module';

import { MenuCursoswebPage } from './menu-cursosweb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCursoswebPageRoutingModule
  ],
  declarations: [MenuCursoswebPage]
})
export class MenuCursoswebPageModule {}
