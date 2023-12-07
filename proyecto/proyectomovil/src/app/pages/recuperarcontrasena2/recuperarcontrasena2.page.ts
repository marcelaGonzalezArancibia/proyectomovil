import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperarcontrasena2',
  templateUrl: './recuperarcontrasena2.page.html',
  styleUrls: ['./recuperarcontrasena2.page.scss'],
})
export class Recuperarcontrasena2Page implements OnInit {
  
  password1: string = '';
  password2: string = '';

  constructor(private router: Router,public toastController: ToastController) {}

  login(){
    this.router.navigate(['/login']);
  }

  async enviarFormulario() {
    if (this.validarCampos()) {
      // Lógica para procesar el formulario si los campos son válidos

      // Muestra un mensaje de éxito
      this.mostrarMensajeExito();
      this.router.navigate(['/login']);

    } else {
      // Muestra un mensaje de error si los campos no son válidos
      this.mostrarMensajeError();
    }
  }

  validarCampos(): boolean {
    // Validar aquí si ambos campos de contraseña son iguales y no están vacíos
    return this.password1.trim() !== '' && this.password1 === this.password2;
  }

  async mostrarMensajeError() {
    const toast = await this.toastController.create({
      message: 'Las contraseñas no coinciden o el campo esta vacío.',
      duration: 3000,
      position: 'top',
      color: 'danger',
    });
    toast.present();
  }

  async mostrarMensajeExito() {
    const toast = await this.toastController.create({
      message: 'Contraseña recuperada con éxito.',
      duration: 3000,
      position: 'top',
      color: 'success',
    });
    toast.present();
  }


  ngOnInit() {}
  
  
}