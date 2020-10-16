import {Component, OnInit, OnDestroy} from '@angular/core';
import {ChangeNodeService} from '../change-node.service';

import {MeasurementUnit} from '../../shared/measurementUnit.model';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-converison-spot',
  templateUrl: './converison-spot.component.html',
  styleUrls: ['./converison-spot.component.css']
})
export class ConverisonSpotComponent implements OnInit, OnDestroy {
  value = 0;
  outputValue: number;
  arrayWithSelectedAndParent: MeasurementUnit[];
  selectedNode: MeasurementUnit;
  parentNode: MeasurementUnit ;
  selectedValue: string;
  private subscription: Subscription;

  constructor(private changeNodeService: ChangeNodeService) {}

  ngOnInit() {
    this.subscription = this.changeNodeService.cast.subscribe(array => {
      this.arrayWithSelectedAndParent = array;
      this.selectedNode  = this.arrayWithSelectedAndParent[0] ;
      this.parentNode = this.arrayWithSelectedAndParent[1];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeInput() {
    const output = this.parentNode.nodes.filter((out) => out.name === this.selectedValue)[0];
    if (this.selectedValue !== undefined) {
      this.outputValue = this.value * this.selectedNode.factor / output.factor;
    }
  }
}
