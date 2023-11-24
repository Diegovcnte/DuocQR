import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.scss'],
})
export class SeccionesComponent  implements OnInit {

  constructor(private datePipe: DatePipe) { }

  /////// Logica funcionamiento del boton por horario
  BotonFuncionando(buttonIndex:number): boolean {
    const tiempoActual = new Date();
    const  horaActual = tiempoActual.getHours();

    switch (buttonIndex){
      case 0:
        return horaActual  >= 8 && horaActual < 10;
      case 1:
        return horaActual >  10 && horaActual < 12;
      case 2:
        return horaActual >  12 && horaActual < 14;
      case 3:
        return horaActual >  14 && horaActual < 16;
      case 4:
      return (horaActual >= 0 && horaActual < 5) || (horaActual >= 16 && horaActual < 18); // por motivos de prueba


      default:
        return false;
    }
  }

  ngOnInit() {}

}
