import {Component, HostListener, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('fab-animation', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms', style({opacity: 1})),
      ]),
      transition(':leave', [
        animate('150ms', style({opacity: 0})),
      ]),
    ]),
  ]
})
export class MainComponent implements OnInit {
  showFAB = false;
  previousScrollTop = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  scrollToTop(): void {
    window.scroll({top: 0, behavior: "smooth"});
  }

  @HostListener('window:scroll')
  onScrollChange(): void {
    this.showFAB = window.scrollY < this.previousScrollTop && window.scrollY > 75;
    this.previousScrollTop = window.scrollY;
  }
}
