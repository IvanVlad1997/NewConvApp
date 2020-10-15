import { Component, OnInit } from '@angular/core';
import {UNITS} from '../shared/unitsArray'


@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {
  units = UNITS;
  constructor() { }

  ngOnInit() {
  }
}
