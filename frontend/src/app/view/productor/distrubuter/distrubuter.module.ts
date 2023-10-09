import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrubuterRoutingModule } from './distrubuter-routing.module';
import { DistrubuterComponent } from './distrubuter.component';


@NgModule({
  declarations: [DistrubuterComponent],
  imports: [
    CommonModule,
    DistrubuterRoutingModule
  ]
})
export class DistrubuterModule { }
