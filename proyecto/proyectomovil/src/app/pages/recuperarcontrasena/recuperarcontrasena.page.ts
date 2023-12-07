import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperarcontrasena',
  templateUrl: './recuperarcontrasena.page.html',
  styleUrls: ['./recuperarcontrasena.page.scss'],
})
export class RecuperarcontrasenaPage implements OnInit {
  nombreDeUsuario: string = '';
  
  constructor(private router: Router,
    private navCtrl: NavController,
    public toastController: ToastController){}
  
    recuperarcontrasena2(){
      if (this.nombreDeUsuario.trim() === 'admin') {
        this.router.navigate(['/recuperarcontrasena2']);
      }else if (this.nombreDeUsuario.trim() === 'profe') {
        this.router.navigate(['/recuperarcontrasena2']);
      } else {
        this.mostrarErrorCampoVacio();
        
      }
    }
    async mostrarErrorCampoVacio() {
      const toast = await this.toastController.create({
        message: 'usuario no existente o campo vacio.',
        duration: 3000, // Duración del mensaje de error en milisegundos
        position: 'top', // Posición del mensaje de error
        color: 'danger', // Color del mensaje de error
      });
      toast.present();
    }

  ngOnInit() {
  }
  

}
