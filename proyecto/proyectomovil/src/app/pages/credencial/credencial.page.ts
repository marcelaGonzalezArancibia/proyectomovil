import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { alumno } from 'src/app/interface/alumno';
@Component({
  selector: 'app-credencial',
  templateUrl: './credencial.page.html',
  styleUrls: ['./credencial.page.scss'],
})
export class CredencialPage implements OnInit {
  alumno!: alumno;
  
  constructor(private router: Router){
   
  }

  home(){
    this.router.navigate(['/home']);
  }
  menu(){
    this.router.navigate(['/menu']);
  }

  ngOnInit() {
    this.alumno =  JSON.parse(localStorage.getItem('datosAlumno')||'')
  }
}


