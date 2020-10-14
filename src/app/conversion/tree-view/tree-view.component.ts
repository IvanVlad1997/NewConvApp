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

  onClick() {
    console.log('sad');
    // console.log(this.treeView);
  }

  // toggleUnit(unit) {
  //   unit.
  // }

  openDialog(unit) {
    this.dialog.open(DialogComponent, {
      data: unit
    });
  }

  deleteNode(parent) {
    console.log(parent);
    this.changeNodeService.deleteNode(parent);
  }

  editNode(unit) {
    console.log(unit);
    this.dialog.open(DialogEditComponent, {
      data: unit
    });
  }

  selectNode(unit: MeasurementUnit) {
    this.selected = unit;
    this.changeNodeService.selectNode(unit);
  }

  // let injector: Injector = Injector.create({
  //   providers: [
  //     { provide: SELECTED_ITEM_TOKEN,
  //       useValue: TreeViewComponent,
  //       multi: true}
  //       ],
  //   parent: this.injector
  // })

}
