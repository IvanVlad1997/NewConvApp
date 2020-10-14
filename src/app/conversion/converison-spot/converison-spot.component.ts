import {Component, Inject, Input, OnInit} from '@angular/core';
import {UNITS} from "../../shared/unitsArray";
import {ChangeNodeService} from "../change-node.service";

import {MeasurementUnit} from "../../shared/measurementUnit.model";


@Component({
  selector: 'app-converison-spot',
  templateUrl: './converison-spot.component.html',
  styleUrls: ['./converison-spot.component.css']
})
export class ConverisonSpotComponent implements OnInit {
  value = 0;
  outputValue: number;
  units = UNITS;
  selectedId: MeasurementUnit;


  constructor(private changeNodeService: ChangeNodeService ) { }

  ngOnInit() {
    this.changeNodeService.cast.subscribe(selected=> this.selectedId = selected)
  }

  test() {
    console.log(this.selectedId)
  }




}
