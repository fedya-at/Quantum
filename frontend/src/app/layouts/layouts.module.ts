import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductorComponent } from './productor/productor.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
