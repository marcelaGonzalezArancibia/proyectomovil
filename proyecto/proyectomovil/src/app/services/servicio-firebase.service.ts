import { Injectable } from '@angular/core';
//librerias
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
//interface
import { alumno } from '../interface/alumno';
import { Cursos } from '../interface/cursos';
import { detalle_Cursos } from '../interface/detalle_cursos';
import { detalle_cursosweb } from '../interface/detalle_cursosweb';
import { secciones } from '../interface/secciones';
import { detalle } from '../interface/detalle';
import { asistencia } from 'src/app/interface/asistencia';
import { profesor } from 'src/app/interface/profesor';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ServicioFirebaseService {
  private cursosColeccion: AngularFirestoreCollection<Cursos>;
  private detalle_cursosColeccion: AngularFirestoreCollection<detalle_Cursos>;

  constructor(private afs: AngularFirestore) {
    (this.cursosColeccion = afs.collection<Cursos>('cursos')),
      (this.detalle_cursosColeccion =
        afs.collection<detalle_Cursos>('detalle_cursos'));
  }
  //firebase

  //inicializarBaseDeDatos() {
  // Crear un nuevo curso y su detalle al iniciar la aplicación
  //  const nuevocurso: Cursos = {
  //    id:'',
  //    nombrecurso:'',

  // ... otras propiedades del curso
  // };

  // const nuevoDetalleCurso: detalle_Cursos = {
  //   id:'',
  //   cursoId: '', // Se llenará automáticamente con el ID del curso
  //   asistencia:0,
  // ... otras propiedades del detalle del curso
  // };

  // Agregar el curso a la colección 'cursos' y luego agregar su detalle a la colección 'detalles-cursos'
  // this.afs.collection<Cursos>('cursos').add(nuevocurso).then(cursoRef => {
  //   nuevoDetalleCurso.cursoId = cursoRef.id;
  //   this.afs.collection<detalle_Cursos>('detalles-cursos').add(nuevoDetalleCurso);
  // });
  //}

  crearCursoYDetalle(curso: Cursos, detalle: detalle_Cursos) {
    // Agregar el curso a la colección 'cursos'
    return this.afs
      .collection<Cursos>('cursos')
      .add(curso)
      .then((cursoRef) => {
        // Asignar el ID del curso al detalle del curso
        detalle.cursoId = cursoRef.id;
        // Agregar el detalle del curso a la colección 'detalles-cursos'
        return this.afs
          .collection<detalle_Cursos>('detalle_cursos')
          .add(detalle);
      });
  }

  //lista cursosweb
  getCollectionsecciones(secciones: string): Observable<any[]> {
    return this.afs.collection(secciones).valueChanges();
  }

  //lista credencial alumno
  getCollectionalumno(alumno: string): Observable<any[]> {
    return this.afs.collection(alumno).valueChanges();
  }

  agregarAsistencia(asistenciaData: asistencia) {
    return this.afs.collection('asistencia').add(asistenciaData);
  }

  buscarDatosProfesor(correo: string) {
    // return this.afs.collection<profesor>('profesor').valueChanges()
    let profesor: profesor;
    return this.afs
      .collection('profesor')
      .get()
      .forEach((e) => {
        e.docChanges().forEach((element) => {
          const data = <profesor>JSON.parse(JSON.stringify(element.doc.data()));

          if (data.correo === correo) {
            profesor = {
              id: element.doc.id,
              apellido: data.apellido,
              correo: data.correo,
              nombre: data.nombre,
              rut: data.rut,
            };
          }
          localStorage.setItem('datosProfesor', JSON.stringify(profesor));
        });
        return profesor;
      }
    
      );
      
     
  }
  buscarDatosAlumno(correo: string) {
    // return this.afs.collection<profesor>('profesor').valueChanges()
    let alumno: alumno;
    return this.afs
      .collection('alumno')
      .get()
      .forEach((e) => {
        e.docChanges().forEach((element) => {
          const data = <alumno>JSON.parse(JSON.stringify(element.doc.data()));

          if (data.correo === correo) {
            alumno = {
              id: element.doc.id,
              apellido: data.apellido,
              correo: data.correo,
              nombre: data.nombre,
              rut: data.rut,
            };
          }
          localStorage.setItem('datosAlumno', JSON.stringify(alumno));
        });
        return alumno;
      }
    
      );
      
     
  }

  buscarDetalle(sessionId: string){
    let idAlumno = JSON.parse(localStorage.getItem('datosAlumno')|| '').id
    let detalle: detalle;
    return this.afs
      .collection('detalle')
      .get()
      .forEach((e) => {
        e.docChanges().forEach((element) => {
          const data = <detalle> JSON.parse(JSON.stringify(element.doc.data()));
          if ((data.cursoSeccionId === sessionId) && (data.alumnoId === idAlumno)) {
            detalle = {
              detalleId: element.doc.id,
              alumnoId: data.alumnoId,
              cursoSeccionId: data.cursoSeccionId
            };
            localStorage.setItem('detalle', JSON.stringify(detalle));
          }
         
        });
        return detalle;
      }
    
      );
  }

  // getcursos(){
  //   this.afs.collection('cursos').valueChanges().subscribe(
  //    (res)=>{
  //     console.log("ok");
  //     console.log(res);
  //   }
  // )
  // }

  // grabarcursos(cursos : Cursos){
  //  return this.cursosColeccion.add(cursos);
  // }

  // eliminarcursos(id : string){
  //   return this.cursosColeccion.doc(id).delete();

  // }
}
