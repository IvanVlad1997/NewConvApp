import {BehaviorSubject} from 'rxjs';
import {Injectable, OnInit} from '@angular/core';

import {UNITS} from '../shared/unitsArray';
import {MeasurementUnit} from '../shared/measurementUnit.model';

@Injectable({
  providedIn: 'root'
})
export class ChangeNodeService {
  units = UNITS;
  private lastId = 10;
  private selectedItem = new BehaviorSubject<MeasurementUnit[]>(this.units);
  cast = this.selectedItem.asObservable();

  constructor() {

  }



  getFromLocalStorage() {
    const retrievedObject = localStorage.getItem('units');
    const counterUnits = localStorage.getItem('counter');

    if (retrievedObject) {
      this.units = JSON.parse(retrievedObject);
    }
    if (counterUnits) {
      this.lastId = JSON.parse(counterUnits);
    }
    return this.units;
  }

  setInLocalStorage(units: MeasurementUnit[]) {
    localStorage.setItem(`units`, JSON.stringify(units));
    }

    setCounterInLocalStorage(lastId: number) {
    localStorage.setItem(`counter`, JSON.stringify(lastId));
    }


  addNode(parent: MeasurementUnit, nameNewNode: string, multiplicationFactor: number): void {
    this.lastId++;
    this.setCounterInLocalStorage(this.lastId);

    parent.nodes.push({
      name: nameNewNode,
      nodes: [],
      id: this.lastId,
      parentId: parent.id,
      factor: multiplicationFactor,
    });
    console.log(this.units);
    this.setInLocalStorage(this.units);
  }


  travelTreeForDelete(units: MeasurementUnit[], parentId: number, id: number): void {
    for (const parentNode of units) {
      if (parentNode.nodes.length === 0) {
        continue;
      }
      if (parentId === parentNode.id) {
        const newArray = parentNode.nodes.filter((nod) => nod.id !== id);
        parentNode.nodes = [...newArray];
        return;
      }
      this.travelTreeForDelete(parentNode.nodes, parentId, id);
    }
    return;
  }

  deleteNode(unit) {
    this.travelTreeForDelete(this.units, unit.parentId, unit.id);
    this.setInLocalStorage(this.units);
    console.log(this.units);

  }

  editNode(parent: MeasurementUnit, nameNewNode: string, factor: number) {
    parent.name = nameNewNode;
    parent.factor = factor;

    console.log(parent);
    console.log(this.units);
    this.setInLocalStorage(this.units);
  }

  selectNode(selectedItem: MeasurementUnit) {
    const parentNode = this.travelTreeForSelect(this.units, selectedItem.parentId);
    console.log(parentNode);
    const arrayWithSelectedAndParent: MeasurementUnit[] = [selectedItem, parentNode];
    this.selectedItem.next(arrayWithSelectedAndParent);
  }

  travelTreeForSelect(units: MeasurementUnit[], parentId: number): MeasurementUnit {
    let newResult: MeasurementUnit;
    let parentNode: MeasurementUnit;
    for ( parentNode of units) {
      if (parentNode.nodes.length === 0) {
          continue;
      }
      console.log(parentNode.id);
      if (parentId === parentNode.id) {
        console.log('ASDASDASDASD GASIT');
        return parentNode;
      }
      newResult = this.travelTreeForSelect(parentNode.nodes, parentId);

    }
    return newResult;

  }

  travelTree(units: MeasurementUnit[], parentId: number): MeasurementUnit {
    let newResult: MeasurementUnit;
    let parentNode: MeasurementUnit;
    for ( parentNode of units) {
      if (parentNode.nodes.length === 0) {
        continue;
      }
      console.log(parentNode.id);
      if (parentId === parentNode.id) {
        console.log('ASDASDASDASD GASIT');
        return parentNode;
      }
      newResult = this.travelTreeForSelect(parentNode.nodes, parentId);

    }
    return newResult;

  }


}
