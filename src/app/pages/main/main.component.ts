import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  showFAB = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  scrollToTop(): void {
    window.scroll({top: 0, behavior: "smooth"});
  }

  @HostListener('window:scroll')
  onScrollChange(): void {
    this.showFAB = window.scrollY > 75;
  }
}
