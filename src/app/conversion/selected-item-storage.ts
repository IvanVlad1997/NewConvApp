import {BehaviorSubject} from 'rxjs';
import {MeasurementUnit} from '../shared/measurementUnit.model';
import {ChangeNodeService} from './change-node.service';


export class SelectedItemStorage {


  constructor(private changeNodeService: ChangeNodeService) {}
  selectedItem = new BehaviorSubject<MeasurementUnit[]>(this.changeNodeService.units);

  selectNode(selectedItem: MeasurementUnit) {
    console.log(selectedItem);
    const parentNode = this.changeNodeService.travelTreeForSelect(this.changeNodeService.units, selectedItem.parentId);
    const arrayWithSelectedAndParent: MeasurementUnit[] = [selectedItem, parentNode];
    console.log(arrayWithSelectedAndParent);
    this.selectedItem.next(arrayWithSelectedAndParent);
  }
}

