import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { alumno } from 'src/app/interface/alumno';
import {
  Barcode,
  BarcodeScanner,
  BarcodeFormat,
} from '@capacitor-mlkit/barcode-scanning';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  arreglo= [];
  arr=new Array();
  usuario:string='';

  alumno!: alumno;
  mostrarTexto: boolean = true;//mostrar bienvenido con un tiempo para que desaparesca
  constructor(private router: Router,private toast: ToastController){
    
  }

  home(){
    this.router.navigate(['/home']);
  }
  cursos(){
    this.router.navigate(['/cursos']);
  }
  credencial(){
    this.router.navigate(['/credencial']);
  }
  escaner(){
    this.router.navigate(['/escaner']);
  }

  ngOnInit() {
    
    this.alumno = JSON.parse(localStorage.getItem('datosAlumno')||'')
   //texto bievenido alumno
    this.mostrarTexto = true;

    // Después de 5 segundos, oculta el texto.
    setTimeout(() => {
      this.mostrarTexto = false;
    }, 5000);
  } 
    
  public barcodes: Barcode[] = [];

  public async scan(): Promise<void> {
    try {
      const { barcodes } = await BarcodeScanner.scan({
        formats: [BarcodeFormat.QrCode],
      });
      this.barcodes = barcodes;
      const mens= await this.toast.create({
        message:"OK",
        duration:7500
      })
      mens.present();
    } catch (error) {
      const mens= await this.toast.create({
        message:""+error,
        duration:7500
      })
      mens.present();
    }
  }
  
}
