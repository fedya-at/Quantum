import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductorComponent } from './productor/productor.component';
import {RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [
    ProductorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ]
})
export class LayoutsModule { }
