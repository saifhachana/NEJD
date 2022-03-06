import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { AdComponent } from './ad/ad.component';
import { CompanieComponent } from './companie/companie.component';
import { ContractComponent } from './contract/contract.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { AdFormComponent } from '../ad-form/ad-form.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {path: 'dashboard',component: ECommerceComponent},
    {path: 'add-contract',component: AddContractComponent},
    {path: 'ad',component: AdComponent},
    {path: 'test',component: AdFormComponent},
    {path: 'companies',component: CompanieComponent},
    {path: 'contracts',component: ContractComponent},
    {
      path: 'clients',
      loadChildren: () => import('./Clients/Clients.module')
        .then(m => m.ClientsModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
