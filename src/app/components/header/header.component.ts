import {Component, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'header[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  deviceWidth?: number;
  isMenuOpened = false;
  isSmall = false;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.deviceWidth = window.innerWidth;
    this.isSmall = this.deviceWidth <= 992;
    if (!this.isSmall) {
      this.isMenuOpened = false;
    }
  }

  @HostListener('window:click', ['$event'])
  onOutsideClick(event: MouseEvent | TouchEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isMenuOpened = false
    }
  }

  onMenuClick() {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
