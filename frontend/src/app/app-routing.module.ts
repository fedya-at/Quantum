import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductorComponent } from './layouts/productor/productor.component';

const routes: Routes = [
  {path:'productor',component:ProductorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
