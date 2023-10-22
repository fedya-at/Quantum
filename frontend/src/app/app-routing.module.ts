import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules} from '@angular/router';
import { ProductorComponent } from './layouts/productor/productor.component';

const routes: Routes = [
  {path:'productor',component:ProductorComponent , children:[
    {path:'clients',loadChildren:()=>import('./view/productor/clients/clients.module').then((m)=>m.ClientsModule)},
    {path:'dist',loadChildren:()=>import('./view/productor/distrubuter/distrubuter.module').then((m)=>m.DistrubuterModule)},
    {path:'com',loadChildren:()=>import('./view/productor/commande/commande.module').then((m)=>m.CommandeModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
