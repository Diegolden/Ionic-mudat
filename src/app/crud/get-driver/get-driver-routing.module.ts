import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetDriverPage } from './get-driver.page';

const routes: Routes = [
  {
    path: '',
    component: GetDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetDriverPageRoutingModule {}
