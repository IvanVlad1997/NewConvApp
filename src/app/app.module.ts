import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeViewComponent } from './conversion/tree-view/tree-view.component';
import { ConversionComponent } from './conversion/conversion.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DialogEditComponent } from './conversion/dialog-edit/dialog-edit.component';
import { ConversionSpotComponent } from './conversion/conversion-spot/conversion-spot.component';
import { MatButtonModule } from '@angular/material/button';
import {ChangeNode} from './services/change-node';
import {LocalStorageItem} from './services/local-storage-item';


@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    ConversionComponent,

    DialogEditComponent,
    ConversionSpotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    FlexLayoutModule,
    MatButtonModule
  ],

  providers: [ChangeNode, LocalStorageItem],
  entryComponents: [ DialogEditComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
