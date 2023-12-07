import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { profesor } from 'src/app/interface/profesor';
@Component({
  selector: 'app-menuweb',
  templateUrl: './menuweb.page.html',
  styleUrls: ['./menuweb.page.scss'],
})
export class MenuwebPage implements OnInit {
  datosPrfoesor = '';

  profesor!: profesor; //traer profesor para bienvenido
  mostrarTexto: boolean = true; //mostrar bienvenido con un tiempo para que desaparesca

  constructor(
    private router: Router
  ) {}


  ngOnInit() {
    this.profesor = JSON.parse(localStorage.getItem('datosProfesor') || '');
    this.mostrarTexto = true;
    // Después de 5 segundos, oculta el texto.
    setTimeout(() => {
      this.mostrarTexto = false;
    }, 5000);
  }

  cursosweb() {
    this.router.navigate(['/cursosweb']);
  }
  credencialweb() {
    this.router.navigate(['/credencialweb']);
  }
}
