import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetDriversPage } from './get-drivers.page';

const routes: Routes = [
  {
    path: '',
    component: GetDriversPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetDriversPageRoutingModule {}
