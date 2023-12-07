import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

////////librerias firebase
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
//autentificacion
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { provideFirebaseApp,initializeApp } from '@angular/fire/app';
import {provideAuth,getAuth }from '@angular/fire/auth';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodePipe } from './pages/qr-code.pipe';





@NgModule({
  
  declarations: [AppComponent, QrCodePipe],
  
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFirestoreModule,
    QRCodeModule,
    provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
    provideAuth(()=>  getAuth()), 
    AngularFireModule.initializeApp(environment.firebaseConfig)],  
  

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy,}],
  bootstrap: [AppComponent],
})
  
  
  export class AppModule { }
  