import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetDriverPageRoutingModule } from './get-driver-routing.module';

import { GetDriverPage } from './get-driver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetDriverPageRoutingModule
  ],
  declarations: [GetDriverPage]
})
export class GetDriverPageModule {}
