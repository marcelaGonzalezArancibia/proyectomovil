import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tomar-asistencia-web',
  templateUrl: './tomar-asistencia-web.page.html',
  styleUrls: ['./tomar-asistencia-web.page.scss'],
})
export class TomarAsistenciaWebPage implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    let idseccion = this.route.snapshot.params['datos'];
    console.log('session')
    console.log(JSON.stringify(idseccion))
  }

}
