import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//libreria firebase
import { ServicioFirebaseService } from 'src/app/services/servicio-firebase.service';
import { Cursos } from 'src/app/interface/cursos';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { detalle_Cursos } from 'src/app/interface/detalle_cursos';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {
  datos: any[] = [];

  cursos: Cursos[] = [];

  idcursos: string;
  constructor(
    private router: Router,
    private firestore: AngularFirestore,
  ) {
    this.idcursos = '';
  }
  

  
  menu() {
    this.router.navigate(['/menu']);
  }

  asistencia(event: Event) {
    let firebaseId: string = (event.target as Element).id;
    this.router.navigate(['/asistencia/' + firebaseId]);
  }

  home() {
    this.router.navigate(['/home']);
  }

  lista_cursos: Cursos[] = [];

  ngOnInit() {
    this.firestore
      .collection('cursos')
      .get()
      .forEach((e) => {
        var algo = e;
        e.docChanges().forEach((element) => {
          const data = JSON.parse(JSON.stringify(element.doc.data()));
          let cur: Cursos;
          cur = {
            id: data.id,
            nombrecurso: data.nombrecurso,
            firestoreId: element.doc.id,
          };
          console.log(cur);
          this.lista_cursos.push(cur);
        });
      });
  }
}
