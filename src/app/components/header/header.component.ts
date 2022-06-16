import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  deviceWidth?: number;
  isMenuOpened = false;
  isSmall = false;

  constructor() { }

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.deviceWidth = window.innerWidth;
    this.isSmall = window.innerWidth <= 992;
  }

  onMenuClick() {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
