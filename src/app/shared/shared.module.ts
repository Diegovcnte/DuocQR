import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TriangleComponent } from './components/triangle/triangle.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainFormComponent } from './components/main-form/main-form.component';
import { RouterModule } from '@angular/router';
import { SeccionesComponent } from './components/secciones/secciones.component';
import { ServiciosComponent } from './components/servicios/servicios.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TriangleComponent,
    MainTitleComponent,
    MainFormComponent,
    SeccionesComponent,
    ServiciosComponent,
  ],
  exports:[
    HeaderComponent,
    TriangleComponent,
    MainTitleComponent,
    MainFormComponent,
    SeccionesComponent,
    ServiciosComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  providers:[
    DatePipe,
  ]
})
export class SharedModule { }
