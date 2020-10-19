import {Component, OnInit, Inject} from '@angular/core';
import {ChangeNode} from '../../services/change-node';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DataType} from '../../shared/for-data';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})

export class DialogEditComponent implements OnInit {
  nameNewNode = this.data.initialValueName;
  multiplicationFactor = this.data.initialValueFactor;

  constructor(private changeNodeService: ChangeNode,
              @Inject(MAT_DIALOG_DATA) public data: DataType) {}

  ngOnInit() {}

  editNode(parent) {
    parent.name = this.nameNewNode;
    parent.factor = this.multiplicationFactor;
    this.changeNodeService.editNode(parent);
  }

  addNode(parent) {
    this.changeNodeService.addNode(parent, this.nameNewNode, this.multiplicationFactor);
  }
}
