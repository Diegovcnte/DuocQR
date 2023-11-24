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
    const  horaActual = tiempoActual.getUTCHours();



    switch (buttonIndex){
      case 0:
        return horaActual  >= 11 && horaActual < 13; // de 8 a 10 hrs
      case 1:
        return horaActual >=  13 && horaActual < 15; //de 10 a 12 hrs
      case 2:
        return horaActual >=  15 && horaActual < 17; //de 12 a 14 hrs 
      case 3:
        return horaActual >=  17 && horaActual < 19; // de 14 a 16 hrs
      case 4:
      return horaActual >= 19 && horaActual < 24; // de 16 a 18 hrs

      default:
        return false;
    }
  }

  ngOnInit() {}

}
