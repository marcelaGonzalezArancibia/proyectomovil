import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuwebPageRoutingModule } from './menuweb-routing.module';

import { MenuwebPage } from './menuweb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuwebPageRoutingModule
  ],
  declarations: [MenuwebPage]
})
export class MenuwebPageModule {}
