import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CongresistasListComponent } from './congresistas/congresistas-list/congresistas-list.component';

const routes: Routes = [{ path: 'congresistas', component: CongresistasListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
