import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//////importar y exportar librerias(agrego todo lo que importa de material)////
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';





@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ///////agrego todo los nombres  de lo que importe separando por comas(component de material)
    MatIconModule,MatDividerModule,MatButtonModule,MatProgressSpinnerModule
   
    
  ]
})

export class ModuloMaterialModule { }
