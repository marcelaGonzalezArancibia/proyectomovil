import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-cursosweb',
  templateUrl: './menu-cursosweb.page.html',
  styleUrls: ['./menu-cursosweb.page.scss'],
})
export class MenuCursoswebPage implements OnInit {

  constructor(private router: Router){}

  asistenciaweb(){
    this.router.navigate(['/asistenciaweb']);
  }
  
  qrweb(){
    this.router.navigate(['/qrweb']);
  }
  tomar_asistencia_web(){
    this.router.navigate(['/tomar-asistencia-web']);
  }
  ngOnInit() {
  }

}
