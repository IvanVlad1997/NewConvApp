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
  arrayWithSelectedAndParent: MeasurementUnit[];
  selectedNode: MeasurementUnit;
  parentNode: MeasurementUnit ;
  selectedValue: string;



  constructor(private changeNodeService: ChangeNodeService) {
  }

  ngOnInit() {
    this.changeNodeService.cast.subscribe(array => {
      this.arrayWithSelectedAndParent = array
      this.selectedNode  = this.arrayWithSelectedAndParent[0] ;
      this.parentNode = this.arrayWithSelectedAndParent[1];

    });

  }

  changeInput() {
    console.log(this.selectedValue)
    let output = this.parentNode.nodes.filter((out) => out.name === this.selectedValue)[0]
    console.log(output)
    if (this.selectedValue !== undefined) {
      this.outputValue = this.value * this.selectedNode.factor / output.factor;
    }
  }


}
