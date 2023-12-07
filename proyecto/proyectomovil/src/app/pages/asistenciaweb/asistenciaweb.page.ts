import { Component, OnInit } from '@angular/core';
import { asistencia2 } from '../../interfaces/interfaces';
import mijson from '../../seed/seed.json';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { detalle } from 'src/app/interface/detalle';
import { alumno } from 'src/app/interface/alumno';
import { asistencia } from 'src/app/interface/asistencia';

@Component({
  selector: 'app-asistenciaweb',
  templateUrl: './asistenciaweb.page.html',
  styleUrls: ['./asistenciaweb.page.scss'],
})
export class AsistenciawebPage implements OnInit {
  //array de los datos de la asistencia(interfaz)
  public datosArray: Array<asistencia2> = [];
  //pasar pagina
  asistenciawebCollection: Array<any> = [];
  datos: any[] = [];
  idseccion: any;
  detalle: detalle[] = [];
  profesor: any;

  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {
    this.asistenciawebCollection = [];
  }

  qrweb() {
    
    this.router.navigate(['/qrweb']);
  }
  tomar_asistencia_web() {
    this.router.navigate(['/tomar-asistencia-web']);
  }
  ngOnInit(

    
  ) {

    //carpeta seed.json
    // this.datosArray = mijson.asistenciaInicia2;

    this.idseccion = localStorage.getItem('firestoreSeccionId');
    this.firestore
      .collection('detalle')
      .get()
      .forEach((e) => {
        e.docChanges().forEach((element) => {
          const data = JSON.parse(JSON.stringify(element.doc.data()));
          let detatail: detalle;
          if (data.cursoSeccionId === this.idseccion) {
            detatail = {
              cursoSeccionId: data.cursoSeccionId,
              alumnoId: data.alumnoId,
              detalleId: element.doc.id,
            };
            this.detalle.push(detatail);
          }
        });
        this.trearDatosAlumnos();
       
      });

  }

  trearDatosAlumnos() {
    console.log('detalle');
    console.log(this.detalle);
    this.firestore
      .collection('alumno')
      .get()
      .forEach((e) => {
        e.docChanges().forEach((element) => {
          const data = JSON.parse(JSON.stringify(element.doc.data()));
          let cur: alumno;
          let asistencia: asistencia2;
          this.detalle.forEach((x) => {
            let i = 1;
            if (x.alumnoId == element.doc.id) {
              cur = {
                id: element.doc.id,
                rut: data.rut,
                nombre: data.nombre,
                apellido: data.apellido,
                correo:data.correo,
              };
              

              asistencia = {
                detalleId:x.detalleId,
                nombre: data.nombre,
                estado: 'aprobado',
                numero: i,
                porcentaje: 30,
              };
              this.datosArray.push(asistencia);
            }
          });
         
        });
        this.traerAsistencia();
      });
      
  }

  traerAsistencia() {
    this.datosArray.forEach((det,index) => {
      this.firestore
        .collection<asistencia>('asistencia', (ref) =>
          ref.where('detalleId', '==', det.detalleId)
        )
        .valueChanges()
        .subscribe((asistencia) => {
          this.datosArray[index] = this.calcularDatos(this.datosArray[index],asistencia);
          
        });
    });
  }

  calcularDatos(array: asistencia2, asistencia: asistencia[]){
    let total = asistencia.length;
    let asiste = asistencia.filter( data => data.estado== 'true').length;
    let porcentaje = +((asiste/total)*100).toFixed(2);
    let aprueba = porcentaje>65 ? 'aprueba': 'reprueba';
    array.porcentaje = porcentaje??0;
    array.estado = aprueba;
    return array;
  }



  marcarAsistencia(presente: boolean): void {

    const profesornombre = JSON.parse(localStorage.getItem('datosProfesor') || '').nombre;
    const profesorapellido = JSON.parse(localStorage.getItem('datosProfesor') || '').apellido;


    const fechaHoraActual = new Date();
    
    // Formatea la fecha y hora según tus necesidades
    const fechaFormateada = `${fechaHoraActual.getDate()}/${fechaHoraActual.getMonth() + 1}/${fechaHoraActual.getFullYear()}`;
    const horaFormateada = `${fechaHoraActual.getHours()}:${fechaHoraActual.getMinutes()}`;

    // Actualiza el estado en Firebase según si está presente o ausente.
    const detalleId='RLsOS4guwVg0KtpGQUSB';
    const estado = presente ? 'true' : 'false';
    const fecha = `${fechaFormateada || ''} ${horaFormateada}`; // Puedes ajustar la fecha según tus requisitos.
    const nombreProfesor =`${profesornombre || ''} ${profesorapellido}`; // Ajusta según tu estructura de datos.
   
    this.firestore
      .collection('asistencia') // Nombre de tu colección en Firebase
      .add({ estado, fecha, nombre: nombreProfesor,detalleId })
      .then(() => {
        console.log(`Asistencia marcada como ${presente ? 'true' : 'false'}`);
      })
      .catch((error) => {
        console.error('Error al marcar la asistencia:', error);
      });
  }
  
}
