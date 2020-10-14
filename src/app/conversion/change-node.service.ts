import {Injectable} from '@angular/core';
import {UNITS} from '../shared/unitsArray';
import {MeasurementUnit} from '../shared/measurementUnit.model';

@Injectable({
  providedIn: 'root'
})
export class ChangeNodeService {
  units = UNITS;
  private lastId: number = 7;

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

  travelTree(units, parentId, id) {
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
      this.travelTree(parentNode.nodes, parentId, id);
    }
  }

  deleteNode(parent) {
    this.travelTree(this.units, parent.parentId, parent.id);
    // console.log(parent.parentId);
  }

  editNode(parent: MeasurementUnit, nameNewNode: string, factor: number) {
    parent.name = nameNewNode;
    parent.factor = factor;
    console.log(parent);
  }

  selectNode(parent) {
    console.log(parent)
  }
}
