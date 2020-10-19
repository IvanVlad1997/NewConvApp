import {Injectable} from '@angular/core';
import {UNITS} from '../shared/units-array';
import {MeasurementUnit} from '../shared/measurement-unit';

@Injectable()

export class ChangeNode {
  units: MeasurementUnit[] = UNITS;
  private lastId: number = 10;

  getFromLocalStorage(): MeasurementUnit[] {
    let retrievedObject: string = localStorage.getItem('units');
    let counterUnits: string = localStorage.getItem('counter');
    if (retrievedObject) {
      this.units = JSON.parse(retrievedObject);
    }
    if (counterUnits) {
      this.lastId = parseInt(counterUnits);
    }
    return this.units;
  }

  setCounterInLocalStorage(lastId: number): void  {
    localStorage.setItem(`counter`, JSON.stringify(lastId));
  }

  setInLocalStorage(units: MeasurementUnit[]): void {
    localStorage.setItem(`units`, JSON.stringify(units));
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
      drop: false
    });
    this.setInLocalStorage(this.units);
  }

  deleteNode(selectedItem): void {
    let parentNode = this.travelTreeForSelect(this.units, selectedItem.parentId);
    let newArray = parentNode.nodes.filter((node) => node.id !== selectedItem.id);
    parentNode.nodes = [...newArray];
    this.setInLocalStorage(this.units);
  }

  editNode(parent: MeasurementUnit): void {
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
