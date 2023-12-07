import { Component, OnInit } from '@angular/core';
import { profesor } from 'src/app/interface/profesor';


@Component({
  selector: 'app-credencialweb',
  templateUrl: './credencialweb.page.html',
  styleUrls: ['./credencialweb.page.scss'],
})
export class CredencialwebPage implements OnInit {

  profesor: profesor;
  constructor(){
    this.profesor = JSON.parse(localStorage.getItem('datosProfesor') || '');
    }

  ngOnInit() {
  }

}
