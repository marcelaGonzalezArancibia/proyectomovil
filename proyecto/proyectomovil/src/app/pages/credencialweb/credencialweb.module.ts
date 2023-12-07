import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CredencialwebPageRoutingModule } from './credencialweb-routing.module';

import { CredencialwebPage } from './credencialweb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CredencialwebPageRoutingModule
  ],
  declarations: [CredencialwebPage]
})
export class CredencialwebPageModule {}
