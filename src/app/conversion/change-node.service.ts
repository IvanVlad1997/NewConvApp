import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

import {UNITS} from '../shared/unitsArray';
import {MeasurementUnit} from '../shared/measurementUnit.model';

@Injectable({
  providedIn: 'root'
})
export class ChangeNodeService {
  units = UNITS;
  private lastId: number = 7;
  private selectedItem = new BehaviorSubject<MeasurementUnit[]>(this.units);
  cast = this.selectedItem.asObservable();

  constructor() {
  }


  addNode(parent: MeasurementUnit, nameNewNode: string, multiplicationFactor: number): void {
    this.lastId++;

    parent.nodes.push({
      name: nameNewNode,
      nodes: [],
      id: this.lastId,
      parentId: parent.id,
      factor: multiplicationFactor,
    });
    console.log();
  }


  travelTreeForDelete(units: MeasurementUnit[], parentId: number, id: number) {
    for (let parentNode of units) {
      if (parentNode.nodes.length === 0) {
        continue;
      }
      // console.log(parentNode.nodes);
      if (parentId === parentNode.id) {
        console.log('gasit' + JSON.stringify(parentNode));
        let newArray = parentNode.nodes.filter((nod) => nod.id !== id);
        console.log(units);
        parentNode.nodes = [...newArray];
        console.log(parentNode);
        console.log(units);
        return;
      }
      this.travelTreeForDelete(parentNode.nodes, parentId, id);
    }
  }

  deleteNode(unit) {
    this.travelTreeForDelete(this.units, unit.parentId, unit.id);
    // console.log(parent.parentId);
  }

  editNode(parent: MeasurementUnit, nameNewNode: string, factor: number) {
    parent.name = nameNewNode;
    parent.factor = factor;
    console.log(parent);
  }

  selectNode(selectedItem: MeasurementUnit) {
    console.log(selectedItem);
    let forReturn: MeasurementUnit;
    let parentNode: MeasurementUnit = this.travelTreeForSelect(this.units, selectedItem.parentId, forReturn);
    console.log(forReturn);
    console.log(parentNode);
    let arrayWithSelectedAndParent: MeasurementUnit[] = [selectedItem, parentNode];
    this.selectedItem.next(arrayWithSelectedAndParent);
  }

  travelTreeForSelect(units: MeasurementUnit[], parentId: number, forReturn: MeasurementUnit): void {
    let parentNode: MeasurementUnit;

    console.log("entered travel tree for select");
    for ( parentNode of units) {
      console.log("in for");
      if (parentNode.nodes.length === 0) {
        continue;
      }
      console.log(parentId);
      console.log(parentNode.id);
      if (parentId === parentNode.id) {
        console.log('gasit' + JSON.stringify(parentNode));
        console.log(parentNode);
        forReturn = parentNode;
        console.log(forReturn);

        return;
      } else {
        this.travelTreeForSelect(parentNode.nodes, parentId, forReturn);

      }
    }
  }
}
