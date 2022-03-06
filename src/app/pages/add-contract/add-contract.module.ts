import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NbCardModule, NbUserModule, NbButtonModule, NbIconModule, NbTabsetModule, NbSelectModule, NbListModule, NbProgressBarModule, NbInputModule, NbRadioModule, NbDatepickerModule, NbStepperModule } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { AddContractComponent } from './add-contract.component';



@NgModule({
  imports: [
    NbStepperModule,
    FormsModule,
    NbDatepickerModule,
    NbDatepickerModule.forRoot(),
    NbRadioModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    AddContractComponent,
  ]
})
export class AddContractModule { }
