import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRwebPageRoutingModule } from './qrweb-routing.module';

import { QRwebPage } from './qrweb.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRwebPageRoutingModule,
     QRCodeModule,
  ],
  declarations: [QRwebPage]
})
export class QRwebPageModule {}
