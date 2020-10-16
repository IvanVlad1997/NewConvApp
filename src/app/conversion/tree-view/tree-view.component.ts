import {Component, Input, OnInit} from '@angular/core';
import { MeasurementUnit } from 'src/app/shared/measurementUnit.model';
import {ChangeNodeService} from '../change-node.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogEditComponent} from '../dialog-edit/dialog-edit.component';
import {SelectedItemStorage} from "../selected-item-storage";


@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})

export class TreeViewComponent implements OnInit {
  dialogType: boolean;
  selected: MeasurementUnit;
  toggleButtons: boolean = false;
  private nodeService: ChangeNodeService = new ChangeNodeService();
  selectedItemStorage: SelectedItemStorage = new SelectedItemStorage(this.nodeService)

  @Input() treeView: MeasurementUnit;

  constructor(private changeNodeService: ChangeNodeService,
              public dialog: MatDialog) {}

  ngOnInit() {}

  addNode(unit) {
    this.dialogType = false;
    this.dialog.open(DialogEditComponent, {
      data: { unit, dialogType: this.dialogType},
    });

  }

  editNode(unit: MeasurementUnit) {
    this.dialogType = true;
    this.dialog.open(DialogEditComponent, {
      data: { unit, dialogType: this.dialogType},
      });
    this.selectNode(unit);
  }

  deleteNode(unit: MeasurementUnit) {
    this.changeNodeService.deleteNode(unit);
  }

  selectNode(unit: MeasurementUnit) {
    this.selected = unit;
    this.selectedItemStorage.selectNode(unit);
  }

  handleToggleButtons(toggleButtons: boolean, unit: MeasurementUnit) {
    this.selectNode(unit)
    this.toggleButtons = !toggleButtons;
  }

  handleToggleCategory( unit: MeasurementUnit) {
    this.selectNode(unit)
    unit.drop = !unit.drop;
  }
}
