import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeviewComponent } from './homeview/homeview.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { AddStockComponent } from './dashboard/add-stock/add-stock.component';
import { ListStockComponent } from './dashboard/list-stock/list-stock.component';
import { StockTransactionComponent } from './dashboard/stock-transaction/stock-transaction.component';
import { AddProducerComponent } from './dashboard/add-producer/add-producer.component';
import { AddDistributerComponent } from './dashboard/add-distributer/add-distributer.component';
import { ListDistributerComponent } from './dashboard/list-distributer/list-distributer.component';
import { ListProducerComponent } from './dashboard/list-producer/list-producer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistreComponent } from './auth/registre/registre.component';
import { loginguardGuard } from './guards/loginguard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/v/home', pathMatch: 'full' },

  {
    path: 'v',
    component: HomeviewComponent,
    children: [
      { path: '', redirectTo: '/v/home', pathMatch: 'full' },
      { path: 'home', component: HomeviewComponent },
      { path: 'contactUs', component: HomeviewComponent },
    ],
  },

  {
    path: 'a',
    children: [
      { path: '', redirectTo: '/a/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'registre', component: RegistreComponent },
    ],
  },
  {
    path: 'd',
    canActivate:[loginguardGuard],
    component: DashboardComponent,

    children: [
      { path: '', redirectTo: '/d/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardHomeComponent },
      { path: 'AddStock', component: AddStockComponent },
      { path: 'ListStock', component: ListStockComponent },
      { path: 'StockTransaction', component: StockTransactionComponent },
      { path: 'AddProducer', component: AddProducerComponent },
      { path: 'AddDistributer', component: AddDistributerComponent },
      { path: 'ListDistributer', component: ListDistributerComponent },
      { path: 'ListProducer', component: ListProducerComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
