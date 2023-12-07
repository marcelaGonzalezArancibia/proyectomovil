import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioFirebaseService } from 'src/app/services/servicio-firebase.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { secciones } from 'src/app/interface/secciones';
import { cursoSeccion } from 'src/app/interface/cursoSeccion';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursosweb',
  templateUrl: './cursosweb.page.html',
  styleUrls: ['./cursosweb.page.scss'],
})
export class CursoswebPage implements OnInit {
  cursosweb: any[] = []; //listar cursos de firebase

  datos: any[] = [];
  lista_secciones: secciones[] = [];

  constructor(
    private router: Router,
    private servFire: ServicioFirebaseService,
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {}

  menu_cursosweb() {
    this.router.navigate(['/menu-cursosweb']);
  }

  asistenciaweb(event: Event) {
    let firestoreseccionId: string = (event.target as Element).id;
    localStorage.setItem('firestoreSeccionId',firestoreseccionId )
    this.router.navigate(['/asistenciaweb']);
  }
  ngOnInit() {
    let idProfesor = JSON.parse(localStorage.getItem('datosProfesor')|| '').id;

    this.firestore
      .collection<cursoSeccion>('cursoSeccion', (ref) =>
        ref.where('profesorId', '==', idProfesor)
      )
      .get()
      .forEach((e) => {
        e.docChanges().forEach((element) => {
          const data = JSON.parse(JSON.stringify(element.doc.data()));
          let sec: secciones;
          sec = {
            id: '123',
            numeroseccion: data.sessionId,
            firestoreseccionId: element.doc.id,
          };
          this.lista_secciones.push(sec);
        });
      });
  }
}
