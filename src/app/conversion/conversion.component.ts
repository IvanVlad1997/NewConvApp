import { Component, OnInit } from '@angular/core';
import {UNITS} from '../shared/unitsArray';
import {ChangeNodeService} from "./change-node.service";


@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {
  units = UNITS;
  constructor(private changeNodeService: ChangeNodeService) {}

  ngOnInit() {

    this.units = this.changeNodeService.getFromLocalStorage();
    console.log(this.units)
  }
}
