import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';






@Component({
  selector: 'app-qrweb',
  templateUrl: './qrweb.page.html',
  styleUrls: ['./qrweb.page.scss'],
})
export class QRwebPage implements OnInit {
  
  qrData:string = '';
  idseccion: any;
  constructor(private router: Router){// Obtén la fecha y hora actual
   
  }
  ngOnInit() {
    this.idseccion = localStorage.getItem('firestoreSeccionId');
    this.crearQr();
  }

  crearQr() {
    const profesornombre = JSON.parse(localStorage.getItem('datosProfesor') || '').nombre;
    const profesorapellido = JSON.parse(localStorage.getItem('datosProfesor') || '').apellido;
  

    const fechaHoraActual = new Date();
    
    // Formatea la fecha y hora según tus necesidades
    const fechaFormateada = `${fechaHoraActual.getDate()}/${fechaHoraActual.getMonth() + 1}/${fechaHoraActual.getFullYear()}`;
    const horaFormateada = `${fechaHoraActual.getHours()}:${fechaHoraActual.getMinutes()}`;

    // Crea la cadena de datos con la fecha y hora actualizadas

    const data = {
      seccionId:this.idseccion,
      estado:"true",
      fecha:`${fechaFormateada || ''} ${horaFormateada}`,
      nombre:`${profesornombre || ''} ${profesorapellido}`,
      
    }
    console.log(data)
    this.qrData = JSON.stringify(data);
  }


  menu_cursosweb(){
    this.router.navigate(['/menu-cursosweb']);
  }


 
}
