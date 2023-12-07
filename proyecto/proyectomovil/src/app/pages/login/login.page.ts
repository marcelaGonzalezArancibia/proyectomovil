import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
////////////////////libreria
import { ServicioFirebaseService } from 'src/app/services/servicio-firebase.service'; 

import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {



  correo: string = '';
  password: string = '';

  constructor(
    private router: Router,
     private aut: Auth,
     private servFire: ServicioFirebaseService) { 
  }
  recuperarcontrasena() {
    this.router.navigate(['/recuperarcontrasena']);
  }
  registrate() {
    this.router.navigate(['/registrate']);
  }
  ngOnInit() {

  }
  async menu() {
    const data = {
      'usuario': this.correo,
      'pass': this.password
    };
    let tipo = validarTipo(this.correo);//1.2.0

    try {
      const user = await signInWithEmailAndPassword(this.aut, this.correo, this.password);

      localStorage.setItem('usuario', this.correo);
      if (tipo==1) {
        this.buscarDatosAlumno();
        setTimeout(() => this.router.navigate(['/menu']), 1000 )
        ;
      } if (tipo==2) {
       this.buscarDatosProfesor();
       setTimeout(() => this.router.navigate(['/menuweb']),1000)
       
      } else (tipo==0) 
    } catch(error) {
      alert(" Usuario no existe ");
    }


  }
  
   buscarDatosProfesor() {
    this.servFire.buscarDatosProfesor(this.correo);
  }

   buscarDatosAlumno() {
    this.servFire.buscarDatosAlumno(this.correo);
  }
  

}



function validarTipo(correo: string) {
  let pos = 0;
  for (let index = 0; index < correo.length; index++) {
    const element = correo[index];
    pos++;
    if (element == '@') {
      break;
    }

  }
  let largo = correo.length;
  let dominio = correo.substring(pos, largo);
  if (dominio == 'duocuc.cl') {
    return 1;
  }
  if (dominio == 'profesor.cl') {
    return 2;
  }
  return 0;
}

