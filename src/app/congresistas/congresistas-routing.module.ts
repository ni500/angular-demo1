import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CongresistaComponent } from './congresista/congresista.component';

const routes: Routes = [{ path: 'congresistas/:id', component: CongresistaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CongresistasRoutingModule {}
