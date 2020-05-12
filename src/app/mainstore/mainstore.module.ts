import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainstorePageRoutingModule } from './mainstore-routing.module';

import { MainstorePage } from './mainstore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainstorePageRoutingModule
  ],
  declarations: [MainstorePage]
})
export class MainstorePageModule {}
