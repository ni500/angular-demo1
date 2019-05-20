import { LoginService } from './../../core/login.service';
import { CongresistasServicesService } from './../congresistas-services.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-add-new-congresista',
  templateUrl: './add-new-congresista.component.html',
  styleUrls: ['./add-new-congresista.component.scss']
})
export class AddNewCongresistaComponent implements OnInit {
  constructor(
    private congresistasServices: CongresistasServicesService,
    private loginServices: LoginService
  ) {}

  ngOnInit() {}

  addNewCongresista() {
    this.loginServices.user.subscribe(user => {
      this.congresistasServices.addNewCongresista(user.uid);
    });
  }
}
