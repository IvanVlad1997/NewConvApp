import {Component, OnInit, Inject} from '@angular/core';
import {ChangeNodeService} from '../change-node.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
// @ts-ignore
import {DataType} from '../../shared/forData';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})

export class DialogEditComponent implements OnInit {
  nameNewNode = '';
  multiplicationFactor = 1;

  constructor(private changeNodeService: ChangeNodeService,
              @Inject(MAT_DIALOG_DATA) public data: DataType) {}

  ngOnInit() {}

  editNode(parent) {
    this.changeNodeService.editNode(parent, this.nameNewNode, this.multiplicationFactor);
  }

  addNode(parent) {
    this.changeNodeService.addNode(parent, this.nameNewNode, this.multiplicationFactor);
  }
}
