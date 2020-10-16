
import {Injectable} from '@angular/core';
import {UNITS} from '../shared/unitsArray';
import {MeasurementUnit} from '../shared/measurementUnit.model';


@Injectable({
  providedIn: 'root'
})
export class ChangeNodeService {
  units = UNITS;
  private lastId = 10;

  constructor() {}

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
  setCounterInLocalStorage(lastId: number) {
    localStorage.setItem(`counter`, JSON.stringify(lastId));
  }

  setInLocalStorage(units: MeasurementUnit[]) {
    localStorage.setItem(`units`, JSON.stringify(units));
  }

  addNode(parent: MeasurementUnit, nameNewNode: string, multiplicationFactor: number): void {
    console.log(parent)
    console.log(nameNewNode);
    console.log(multiplicationFactor)

    this.lastId++;
    this.setCounterInLocalStorage(this.lastId);
    parent.nodes.push({
      name: nameNewNode,
      nodes: [],
      id: this.lastId,
      parentId: parent.id,
      factor: multiplicationFactor,
      drop: false,
    });
    this.setInLocalStorage(this.units);
  }

  deleteNode(selectedItem) {
    const parentNode = this.travelTreeForSelect(this.units, selectedItem.parentId);
    const newArray = parentNode.nodes.filter((node) => node.id !== selectedItem.id);
    parentNode.nodes = [...newArray];
    console.log(parentNode);
    console.log(this.units);
    this.setInLocalStorage(this.units);
  }

  editNode(parent: MeasurementUnit, nameNewNode: string, factor: number) {
    parent.name = nameNewNode;
    parent.factor = factor;
    this.setInLocalStorage(this.units);
  }

  travelTreeForSelect(units: MeasurementUnit[], parentId: number): MeasurementUnit {
    let newResult: MeasurementUnit;
    let parentNode: MeasurementUnit;
    for ( parentNode of units) {
      if (parentNode.nodes.length === 0) {
          continue;
      }
      if (parentId === parentNode.id) {
        return parentNode;
      }
      newResult = this.travelTreeForSelect(parentNode.nodes, parentId);
      if (newResult !== undefined) {
          break;

      }
    }
    return newResult;
  }
}
