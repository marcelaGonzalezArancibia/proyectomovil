import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { asistencia1 } from '../../interfaces/interfaces';
import mijson from '../../seed/seed.json';
//firebase
import { ServicioFirebaseService } from 'src/app/services/servicio-firebase.service';
import { detalle_Cursos } from 'src/app/interface/detalle_cursos';
import { Cursos } from 'src/app/interface/cursos';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { ActivatedRoute } from '@angular/router';
import { cursoSeccion } from 'src/app/interface/cursoSeccion';
import { detalle } from 'src/app/interface/detalle';
import { asistencia}from 'src/app/interface/asistencia';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  asistenciaCollection: Array<any> = [];

  datos: any[] = [];

  idcurso: string;

  idAlumno= 'gnrbamD22eh5ImNLkNQ1';
  listaAsistencia : asistencia1 | undefined ;

  constructor(
    private router: Router,
    private servFire: ServicioFirebaseService,
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {
    //inicializar con un valor predeterminado
    this.idcurso = '';
    this.asistenciaCollection = [];
  }

  cursos(): void {
    this.router.navigate(['/cursos']);
  }
  home(): void {
    this.router.navigate(['/home']);
  }

  lista_cursos: Cursos[] = [];

  ngOnInit() {
    this.idcurso = this.route.snapshot.params['idcurso'];
 

      this.firestore
      .collection('cursoSeccion')
      .get()
      .forEach((e) => {
        e.docChanges().forEach((element) => {
          console.log('elemento')
          console.log(element.doc.id)
          this.buscarAsistencia(element.doc.id)
         
        });
      });
  }

  buscarAsistencia(idCurso: string){
   // Consultar los detalles_cursos asociados a idcurso desde Firebase
  //  this.firestore
  //  .collection<detalle>('detalle', (ref) =>
  //    ref.where('cursoSeccionId', '==',idCurso ).where('alumnoId','==',this.idAlumno)
  //  )
  //  .valueChanges()
  //  .subscribe((retorno) => {
  //   console.log('retorn')
  //    console.log(retorno)
  //    // this.asistenciaCollection.push(...asistencia);
  //  });


   this.firestore
   .collection('detalle')
   .get()
   .forEach((e) => {
     e.docChanges().forEach((element) => {
      const data = <detalle>JSON.parse(JSON.stringify(element.doc.data()));
      if(data.alumnoId === this.idAlumno && data.cursoSeccionId === idCurso){
        this.traerAsistencia(element.doc.id);

      }
      
     });
   });

  }


  traerAsistencia(detalleID: string) {
      this.firestore
        .collection<asistencia>('asistencia', (ref) =>
          ref.where('detalleId', '==', detalleID)
        )
        .valueChanges()
        .subscribe((asistencia) => {
          console.log('asistencia')
          console.log(asistencia)
         
         
       
          this.listaAsistencia = this.calcularDatos(asistencia);

          
        });

  }

  calcularDatos(asistencia: asistencia[]){
    let total = asistencia.length;
    let asiste = asistencia.filter( data => data.estado== 'true').length;
    let porcentaje = +((asiste/total)*100).toFixed(2);
    let aprueba = porcentaje>65 ? 'aprueba': 'reprueba';
    let auxAsistnecia: asistencia1 = {
      estado:aprueba,
      porcentaje:porcentaje??0,
      nombre_curso: 'programacion'
    }

    return auxAsistnecia;
  }
  
  
}
