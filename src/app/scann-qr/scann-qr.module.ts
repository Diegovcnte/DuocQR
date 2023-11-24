import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { IonicModule } from '@ionic/angular';

import { ScannQRPageRoutingModule } from './scann-qr-routing.module';

import { ScannQRPage } from './scann-qr.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScannQRPageRoutingModule,
    SharedModule,
    MatProgressBarModule
  ],
  declarations: [ScannQRPage]
})
export class ScannQRPageModule {}
