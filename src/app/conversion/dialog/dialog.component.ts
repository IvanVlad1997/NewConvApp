import {Component, OnInit, Inject} from '@angular/core';
import {ChangeNodeService} from '../change-node.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MeasurementUnit} from '../../shared/measurementUnit.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  nameNewNode = '';
  multiplicationFactor = 1;

  constructor(private changeNodeService: ChangeNodeService,
              @Inject(MAT_DIALOG_DATA) public data: MeasurementUnit
  ) { }

  ngOnInit() {
  }

  addNode(parent) {
    console.log(parent);
    console.log(this.nameNewNode);
    this.changeNodeService.addNode(parent, this.nameNewNode, this.multiplicationFactor);
  }

}
