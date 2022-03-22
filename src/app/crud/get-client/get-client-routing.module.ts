import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetClientPage } from './get-client.page';

const routes: Routes = [
  {
    path: '',
    component: GetClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetClientPageRoutingModule {}
