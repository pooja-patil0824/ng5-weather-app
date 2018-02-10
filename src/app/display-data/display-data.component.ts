import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {
  @Input() weatherData: Object[];
  constructor() { }

  ngOnInit() {
  }

}
