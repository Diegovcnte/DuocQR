import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/servicios/autentication.service';


@Component({
  selector: 'app-listando',
  templateUrl: './listando.component.html',
  styleUrls: ['./listando.component.scss'],
})
export class ListandoComponent implements OnInit {
  @Input() alumno!: string;
  @Input() namee!: string;
  @Input() qrEscaneado: boolean = false; // Nueva propiedad

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    // Suscribirse al evento de actualización del usuario
    this.authService.usuarioActualizado.subscribe((username: string) => {
      // Actualizar el estado del botón si el nombre de usuario coincide
      if (this.alumno.includes(username)) {
        this.qrEscaneado = true;
      }
    });
  }
}