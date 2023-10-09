import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductorComponent } from './layouts/productor/productor.component';

const routes: Routes = [
  {path:'productor',component:ProductorComponent , children:[
    {path:'clients',loadChildren:()=>import('./view/productor/clients/clients.module').then((m)=>m.ClientsModule)},
    {path:'dist',loadChildren:()=>import('./view/productor/distrubuter/distrubuter.module').then((m)=>m.DistrubuterModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
