import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
///////////////////////////////////modulo materia(botones)
import { ModuloMaterialModule } from 'src/app/modulo/modulo-material/modulo-material.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ModuloMaterialModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
