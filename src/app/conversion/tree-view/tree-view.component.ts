import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import { MeasurementUnit } from 'src/app/shared/measurementUnit.model';
import {ChangeNodeService} from '../change-node.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
import {DialogEditComponent} from '../dialog-edit/dialog-edit.component';


@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  selected: MeasurementUnit;
  @Input() treeView: MeasurementUnit;

  constructor(private changeNodeService: ChangeNodeService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(unit) {
    this.dialog.open(DialogComponent, {
      data: unit
    });
  }

  deleteNode(unit: MeasurementUnit) {
    console.log(unit);
    this.changeNodeService.deleteNode(unit);
  }

  editNode(unit: MeasurementUnit) {
    console.log(unit);
    this.dialog.open(DialogEditComponent, {
      data: unit
    });
  }

  selectNode(unit: MeasurementUnit) {
    this.selected = unit;
    this.changeNodeService.selectNode(unit);
  }

}
