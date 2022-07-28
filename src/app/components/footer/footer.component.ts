import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'footer[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  selectedValue: string | undefined;
  value: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
