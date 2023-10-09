import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrubuterComponent } from './distrubuter.component';

const routes: Routes = [
  {path:'',component:DistrubuterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrubuterRoutingModule { }
