import {Component, Inject, Input, OnInit} from '@angular/core';
import {UNITS} from "../../shared/unitsArray";
import {ChangeNodeService} from "../change-node.service";
import {SELECTED_ITEM_TOKEN} from "../../tokens/selectedItemInjectionToken";
import {MeasurementUnit} from "../../shared/measurementUnit.model";
import {TreeViewComponent} from "../tree-view/tree-view.component";

@Component({
  selector: 'app-converison-spot',
  templateUrl: './converison-spot.component.html',
  styleUrls: ['./converison-spot.component.css']
})
export class ConverisonSpotComponent implements OnInit {
  value = 0;
  outputValue: number;
  units = UNITS;

@Input() public selectedUnit: TreeViewComponent;

  constructor(private changeNodeService: ChangeNodeService,
              @Inject(SELECTED_ITEM_TOKEN) public selected: MeasurementUnit,
              ) { }

  ngOnInit() {

  }

  test() {
    console.log(this.selected)
  }




}
