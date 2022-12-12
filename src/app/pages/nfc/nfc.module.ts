import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NfcPage } from './nfc';
import { NfcPageRoutingModule } from './nfc-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  NfcPageRoutingModule
  ],
  declarations: [
    NfcPage,
  ]
})
export class NfcModule { }
