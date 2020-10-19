import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MeasurementUnit} from '../shared/measurement-unit';
import {ChangeNode} from './change-node';

@Injectable()
export class LocalStorageItem {
   selectedItem = new BehaviorSubject<MeasurementUnit[]>(this.changeNodeService.units);

  constructor(private changeNodeService: ChangeNode) {}

  selectNode(selectedItem: MeasurementUnit) {
    const parentNode = this.changeNodeService.travelTreeForSelect(this.changeNodeService.units, selectedItem.parentId);
    const arrayWithSelectedAndParent: MeasurementUnit[] = [selectedItem, parentNode];
    this.selectedItem.next(arrayWithSelectedAndParent);
  }
}
