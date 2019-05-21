import { NgMaterialModule } from '../shared/ng-material/ng-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongresistasRoutingModule } from './congresistas-routing.module';
import { CongresistaComponent } from './congresista/congresista.component';
import { CongresistasListComponent } from './congresistas-list/congresistas-list.component';
import { CongresistasServicesService } from './congresistas-services.service';

@NgModule({
  declarations: [CongresistaComponent, CongresistasListComponent],
  imports: [CommonModule, CongresistasRoutingModule, NgMaterialModule],
  exports: [CongresistaComponent, CongresistasListComponent],
  providers: [CongresistasServicesService]
})
export class CongresistasModule {}
