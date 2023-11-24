import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScannQRPage } from './scann-qr.page';

const routes: Routes = [
  {
    path: '',
    component: ScannQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScannQRPageRoutingModule {}
