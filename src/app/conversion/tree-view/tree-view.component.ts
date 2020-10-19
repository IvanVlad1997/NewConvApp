import {Component, Input, OnInit} from '@angular/core';
import { MeasurementUnit } from 'src/app/shared/measurement-unit';
import {ChangeNode} from '../../services/change-node';
import {MatDialog} from '@angular/material/dialog';
import {DialogEditComponent} from '../dialog-edit/dialog-edit.component';
import {LocalStorageItem} from '../../services/local-storage-item';


@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  selected: MeasurementUnit;
  toggleButtons = false;


  @Input() treeView: MeasurementUnit[];

  constructor(private changeNodeService: ChangeNode,
              private localStorageItem: LocalStorageItem,
              public dialog: MatDialog,
             ) {}

  ngOnInit() {}

  addNode(unit) {
    this.dialog.open(DialogEditComponent, {
      data: { unitM: unit, dialogType: false, initialValueName: '', initialValueFactor: 1}
    });
  }

  deleteNode(unit: MeasurementUnit) {
    this.changeNodeService.deleteNode(unit);
  }

  editNode(unit: MeasurementUnit) {
    this.dialog.open(DialogEditComponent, {
      data: { unitM: unit, dialogType: true, initialValueName: unit.name, initialValueFactor: unit.factor}
    });
  }

  selectNode(unit: MeasurementUnit) {
    this.selected = unit;
    this.localStorageItem.selectNode(unit);
  }

  handleToggleButtons(toggleButtons: boolean, unit: MeasurementUnit) {
    this.selectNode(unit);
    this.toggleButtons = !toggleButtons;
  }

  handleToggleCategory( unit: MeasurementUnit) {
    this.selectNode(unit);
    unit.drop = !unit.drop;
  }
}
