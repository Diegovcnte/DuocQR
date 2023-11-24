import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AuthenticationService } from '../servicios/autentication.service';

@Component({
  selector: 'app-scann-qr',
  templateUrl: './scann-qr.page.html',
  styleUrls: ['./scann-qr.page.scss'],
})
export class ScannQRPage implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthenticationService) {}

  ngOnInit() {
    // Espera 4 segundos antes de iniciar el escaneo
    setTimeout(() => {
      this.escanearQR();
    }, 4000);
  }

  // scann-qr.page.ts
async escanearQR() {
  try {
    const result = await BarcodeScanner.startScan();
    if (result.hasContent) {
      // Maneja el resultado del escaneo como desees
      console.log('Contenido del QR escaneado:', result.content);

      // Actualiza la propiedad qrEscaneado del usuario correspondiente
      this.authService.actualizarQREscaneado(result.content);
    }
  } catch (error) {
    console.error('Error al escanear:', error);
  } finally {
    // Después de escanear, navega a la página 'feed'
    this.router.navigate(['/feed']);
  }
}

  
  
}