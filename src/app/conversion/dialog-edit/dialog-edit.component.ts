import {Component, OnInit, Inject} from '@angular/core';
import {ChangeNodeService} from '../change-node.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MeasurementUnit} from '../../shared/measurementUnit.model';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {
  nameNewNode = '';
  multiplicationFactor = 1;

  constructor(private changeNodeService: ChangeNodeService,
              @Inject(MAT_DIALOG_DATA) public data: MeasurementUnit,
              ) { }

  ngOnInit() {
  }

  editNode(parent){
    console.log(parent);
    console.log(this.nameNewNode)
    this.changeNodeService.editNode(parent, this.nameNewNode, this.multiplicationFactor);
  }
}
