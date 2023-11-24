import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../servicios/autentication.service';
import * as QRCode from 'qrcode'; // Importa la librería QRCode

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQRPage implements OnInit {
  qrCodeData: string = ''; // Variable para almacenar los datos del código QR

  constructor(public authService: AuthenticationService) {}

  ngOnInit() {}

  generarQR() {
    // Genera el código QR con los datos que desees (puedes personalizar esto)
    const dataToEncode = 'Datos del QR'; // Reemplaza esto con los datos que deseas codificar
    QRCode.toDataURL(dataToEncode, (err, url) => {
      if (err) {
        console.error('Error al generar el código QR:', err);
      } else {
        this.qrCodeData = url; // Almacena la URL del código QR generada
      }
    });
  }
}
