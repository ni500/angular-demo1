import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgMaterialModule } from '../design/ng-material/ng-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, NgMaterialModule, RouterModule],
  exports: [NavbarComponent, RouterModule]
})
export class SharedModule {}
