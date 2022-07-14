import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  @Input() image!: string;
  @Input() title!: string;
  @Input() h2!: string;
  @Input() h3!: string;
  @Input() h4!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
