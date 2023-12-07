import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';

///plantilla cabecera  y el pie para las paginas
import { CabeceraComponent } from 'src/app/components/cabecera/cabecera.component';
import { PieComponent } from 'src/app/components/pie/pie.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  //declamos de declarations la plantillas de components que se importaron
  declarations: [MenuPage, CabeceraComponent,PieComponent]
})
export class MenuPageModule {}
