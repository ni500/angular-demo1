import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { CoreModule } from '../core/core.module';
import { AddNewCongresistaComponent } from '../congresistas/add-new-congresista/add-new-congresista.component';

@NgModule({
  declarations: [NavbarComponent, HomePageComponent, AddNewCongresistaComponent],
  imports: [CommonModule, NgMaterialModule, RouterModule, CoreModule],
  exports: [NavbarComponent, RouterModule, HomePageComponent, AddNewCongresistaComponent]
})
export class SharedModule {}
