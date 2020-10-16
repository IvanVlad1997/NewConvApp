import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MeasurementUnit} from './shared/measurementUnit.model';
import {ChangeNodeService} from './conversion/change-node.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageItemService {
  private selectedItem = new BehaviorSubject<MeasurementUnit[]>(this.changeNodeService.units);
  cast = this.selectedItem.asObservable();
  constructor(private changeNodeService: ChangeNodeService) {}

  selectNode(selectedItem: MeasurementUnit) {
    const parentNode = this.changeNodeService.travelTreeForSelect(this.changeNodeService.units, selectedItem.parentId);
    const arrayWithSelectedAndParent: MeasurementUnit[] = [selectedItem, parentNode];
    this.selectedItem.next(arrayWithSelectedAndParent);
  }


}
