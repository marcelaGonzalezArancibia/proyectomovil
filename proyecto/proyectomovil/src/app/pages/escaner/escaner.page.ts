import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Barcode,
  BarcodeScanner,
  BarcodeFormat,
} from '@capacitor-mlkit/barcode-scanning';
import { ToastController } from '@ionic/angular';
import { ServicioFirebaseService } from 'src/app/services/servicio-firebase.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { asistencia } from 'src/app/interface/asistencia';





@Component({
  selector: 'app-escaner',
  templateUrl: './escaner.page.html',
  styleUrls: ['./escaner.page.scss'],
})
export class EscanerPage implements OnInit {
  public scannedData: string = ''; 
  public seccionId: string = '';
  public fecha: string = '';
  nombre: any;
  
  constructor(private router: Router,private toast: ToastController, private servFire: ServicioFirebaseService,
    private firestore: AngularFirestore ) {}

  menu() {
    this.router.navigate(['/menu']);
  }
  home() {
    this.router.navigate(['/home']);
  }
  ngOnInit() {}

  public barcodes: Barcode[] = [];

  datoscurso:any;
 
 public async scan(): Promise<void> {
  try {
    const { barcodes } = await BarcodeScanner.scan({
      formats: [BarcodeFormat.QrCode],
    });

    if (barcodes.length > 0) {
      const scannedData = barcodes[0].rawValue;
      this.showScannedData(scannedData);
      const dataToJson = JSON.parse(scannedData)
      this.seccionId = dataToJson.seccionId;
      this.fecha = dataToJson.fecha;
      this.nombre=dataToJson.nombre;
      this.buscarDetalle();
     

      const men = await this.toast.create({
        message: 'OK',
        duration: 2500,
      });
      men.present();
    } else {
      const men = await this.toast.create({
        message: 'No se encontraron códigos QR',
        duration: 2500,
      });
      men.present();
    }
  } catch (error) {
    const men = await this.toast.create({
      message: '' + error,
      duration: 8500,
    });
    men.present();
  }
}

private showScannedData(data: string): void {
  this.scannedData = data; // Almacena los datos escaneados en la variable
}

public async installGoogleBarcodeScannerModule(): Promise<void> {
  await BarcodeScanner.installGoogleBarcodeScannerModule();
}


async guardarfire() {
  const detalleId = JSON.parse(localStorage.getItem('detalle') || '').detalleId;

  // Mostrar un cuadro de diálogo de confirmación al usuario
  const confirmacion = window.confirm('¿Deseas guardar la asistencia?');

  // Establecer el estado en función de la confirmación
  const estado = confirmacion ? 'true' : 'false';

  const asistenciaData: asistencia = {
    detalleId: detalleId,
    estado: estado,
    fecha: this.fecha,
    nombre: this.nombre,
    // ... otros campos según tus necesidades ...
  };

  if (confirmacion) {
    this.servFire.agregarAsistencia(asistenciaData)
      .then(respuesta => {
        console.log('Asistencia guardada con éxito.');
        console.log(respuesta);
      })
      .catch(err => console.error('Error al guardar la asistencia:', err));
  } else {
    // Si el usuario cancela, puedes hacer algo más si es necesario
    console.log('Se canceló la asistencia.');
  }
}
 buscarDetalle(){
   this.servFire.buscarDetalle(this.seccionId)
}


}