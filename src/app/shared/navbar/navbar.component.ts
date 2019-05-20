import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input()
  navTitle;

  @Output() openNav = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  openSideNav(e: string) {
    this.openNav.emit('openMenu');
  }
}
