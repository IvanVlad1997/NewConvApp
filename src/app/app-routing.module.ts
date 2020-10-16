import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConversionComponent} from './conversion/conversion.component';


const routes: Routes = [
  { path: '', component: ConversionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
