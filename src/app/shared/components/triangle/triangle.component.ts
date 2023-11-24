import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss'],
})
export class TriangleComponent  implements OnInit {

  @Input() backButton!: string;

  constructor() { }

  ngOnInit() {}

}
