import { CongresistasServicesService } from './../congresistas-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-congresistas-list',
  templateUrl: './congresistas-list.component.html',
  styleUrls: ['./congresistas-list.component.scss']
})
export class CongresistasListComponent implements OnInit {
  congresistas: [];

  constructor(private congresistasService: CongresistasServicesService) {}

  ngOnInit() {
    this.congresistasService.getCongresistas().subscribe(congresistas => {
      this.congresistas = congresistas;
    });
  }
}
