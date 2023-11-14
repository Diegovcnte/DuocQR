import { Component, NgModule, OnInit } from '@angular/core';
import { AuthenticationService } from '../servicios/autentication.service';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  
})
export class FeedPage implements OnInit {
  usuario: string = '';

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    // El nombre de usuario se recuperará del servicio AuthenticationService
    const fullEmail = this.authService.username;
    const atIndex = fullEmail.indexOf('@'); // Encuentra la posición de la "@" en el correo

    if (atIndex !== -1) {
      // Si se encuentra la "@", obtén la parte del correo antes de la "@"
      this.usuario = fullEmail.substring(0, atIndex);
    } else {
      // Si no se encuentra la "@", utiliza el correo completo
      this.usuario = fullEmail;
    }
  }
}