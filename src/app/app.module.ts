import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CongresistasModule } from './congresistas/congresistas.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { VotosModule } from './votos/votos.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NgMaterialModule } from './design/ng-material/ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CongresistasServicesService } from './congresistas/congresistas-services.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CongresistasModule,
    ProyectosModule,
    VotosModule,
    SharedModule,
    CoreModule,
    NgMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [CongresistasServicesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
