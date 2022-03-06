import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { CompanieModule } from './companie/companie.module';
import { ContractModule } from './contract/contract.module';
import { AdModule } from './ad/ad.module';
import { DatePipe } from '@angular/common';
import { AddContractModule } from './add-contract/add-contract.module';
import { AdFormModule } from '../ad-form/ad-form.module';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ECommerceModule,
    CompanieModule,
    ContractModule,
    AddContractModule,
    AdModule,
    AdFormModule
  ],
  declarations: [
    PagesComponent,
  ],
  providers: [
    DatePipe
  ],
})
export class PagesModule {
}
