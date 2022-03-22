import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetClientPageRoutingModule } from './get-client-routing.module';

import { GetClientPage } from './get-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetClientPageRoutingModule
  ],
  declarations: [GetClientPage]
})
export class GetClientPageModule {}
