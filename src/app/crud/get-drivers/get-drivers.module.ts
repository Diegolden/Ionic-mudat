import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetDriversPageRoutingModule } from './get-drivers-routing.module';

import { GetDriversPage } from './get-drivers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetDriversPageRoutingModule
  ],
  declarations: [GetDriversPage]
})
export class GetDriversPageModule {}
