import { Component, OnInit } from '@angular/core';
import {UNITS} from '../shared/units-array';
import {ChangeNode} from '../services/change-node';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {
  units = UNITS;
  constructor(private changeNodeService: ChangeNode) {}

  ngOnInit() {
    this.units = this.changeNodeService.getFromLocalStorage();
  }
}
