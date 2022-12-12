import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NfcPage } from './nfc';

const routes: Routes = [
  {
    path: '',
    component: NfcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NfcPageRoutingModule { }
