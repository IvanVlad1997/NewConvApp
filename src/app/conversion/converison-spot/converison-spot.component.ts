import {Component, OnInit, OnDestroy} from '@angular/core';
import {MeasurementUnit} from '../../shared/measurementUnit.model';
import {Subscription} from 'rxjs';
import {SelectedItemStorage} from '../selected-item-storage';
import {ChangeNodeService} from '../change-node.service';


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
  private changeNodeService: ChangeNodeService = new ChangeNodeService();
  selectedItemStorage: SelectedItemStorage = new SelectedItemStorage(this.changeNodeService)
  private subscription: Subscription;

  constructor() {}

  ngOnInit() {
    this.subscription = this.selectedItemStorage.selectedItem.subscribe(array => {
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
