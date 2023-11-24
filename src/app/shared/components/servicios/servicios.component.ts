import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent  implements OnInit {

  @Input() name!: string;
  @Input() texto!:string;
  @Input() routerLink?: string; // Propiedad routerLink opcional


  constructor() { }

  ngOnInit() {}

}
