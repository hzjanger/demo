import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WarehouseComponent} from './page/warehouse/warehouse.component';

const routes: Routes = [
  { path: '',component: WarehouseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
