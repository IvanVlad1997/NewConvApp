import {Component, Input, OnInit} from '@angular/core';
import { MeasurementUnit } from 'src/app/shared/measurementUnit.model';
import {ChangeNodeService} from '../change-node.service';
import {MatDialog} from '@angular/material/dialog';

import {DialogEditComponent} from '../dialog-edit/dialog-edit.component';


@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  selected: MeasurementUnit;
  toggleButtons = false;

  @Input() treeView: MeasurementUnit;

  constructor(private changeNodeService: ChangeNodeService,
              public dialog: MatDialog) {}

  ngOnInit() {}

  addNode(unit) {
    this.dialog.open(DialogEditComponent, {
      data: { unitM: unit, dialogType: false},

    });
  }

  deleteNode(unit: MeasurementUnit) {
    this.changeNodeService.deleteNode(unit);
  }

  editNode(unit: MeasurementUnit) {
    this.dialog.open(DialogEditComponent, {
      data: { unitM: unit, dialogType: true},
    });
  }

  selectNode(unit: MeasurementUnit) {
    this.selected = unit;
    this.changeNodeService.selectNode(unit);
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
