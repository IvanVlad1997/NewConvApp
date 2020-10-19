import {Component, OnInit, OnDestroy} from '@angular/core';
import {ChangeNode} from '../../services/change-node';
import {MeasurementUnit} from '../../shared/measurement-unit';
import {Subscription} from 'rxjs';
import {LocalStorageItem} from '../../services/local-storage-item';


@Component({
  selector: 'app-conversion-spot',
  templateUrl: './conversion-spot.component.html',
  styleUrls: ['./conversion-spot.component.css']
})

export class ConversionSpotComponent implements OnInit, OnDestroy {
  value = 0;
  outputValue: number;
  arrayWithSelectedAndParent: MeasurementUnit[];
  selectedNode: MeasurementUnit;
  parentNode: MeasurementUnit ;
  selectedValue: string;
  private subscription: Subscription;

  constructor(private changeNodeService: ChangeNode,
              private localStorageItem: LocalStorageItem,
              ) {}

  ngOnInit() {
    this.subscription = this.localStorageItem.selectedItem.subscribe(array => {
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
