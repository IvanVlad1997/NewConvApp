import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConversionComponent} from './conversion/conversion.component';


const routes: Routes = [
  { path: '', component: ConversionComponent },
  // { path: 'pipes', component: PipesComponent},
  // { path: 'services', component: ServicesComponent},
  // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  // { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
